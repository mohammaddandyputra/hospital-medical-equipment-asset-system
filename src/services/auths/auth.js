require('dotenv').config()
const _ = require('lodash')
const { compare } = require('bcrypt')
const { Sequelize } = require('sequelize')
const CustomError = require('../../utils/error')
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const SALT_ROUND = 10
const { UserModel, TokenModel } = require('../../models')
const { randomString, sendMailVerifyAccount } = require('../../utils')

const logIn = async (req) => {
  try {
    const attributes = ['id', 'first_name', 'last_name', 'email', 'password', 'verify']
    const user = await UserModel.findOne({ where: Sequelize.where(Sequelize.fn('lower', Sequelize.col('email')), Sequelize.fn('lower', req.email)), attributes })
    let data = user.dataValues

    if (!user) {
      return Promise.reject(new Error('User not found'))
    }

    const match = await compare(req.password, user.password)
    if (!match) {
      return Promise.reject(new CustomError('Password incorrect', 400))
    }

    if (data.verify) {
      return Promise.reject(new CustomError('User has registered, but the account need to verification. Please register again'))
    }

    data.full_name = `${data.first_name} ${data.last_name}`
    data = _.omit(data, ['first_name', 'last_name', 'password'])

    const token = JWT.sign(data, process.env.APP_JWT_KEY, { expiresIn: process.env.APP_JWT_EXP })

    await UserModel.update({ last_login: new Date().toISOString(), updated_at: new Date().toISOString() }, { where: { id: data.id } })

    return Promise.resolve(token)
  } catch (error) {
    return Promise.reject(error)
  }
}

const register = async (req) => {
  try {
    Object.assign(req, { password: bcrypt.hashSync(req.password, SALT_ROUND) })

    const [user, created] = await UserModel.findOrCreate({
      where: { email: req.email },
      defaults: {
        ...req
      }
    })
    const data = user.dataValues

    if (!created && !data.verify) {
      return Promise.reject(new CustomError('User has registered', 400))
    }

    const createToken = await TokenModel.create({
      user_id: data.id,
      type: 'verify-account',
      token: randomString(50),
      deleted: false,
      created_by: data.id
    })
    const token = createToken.dataValues.token
    const full_name = `${data.first_name} ${data.last_name}`

    await sendMailVerifyAccount({ full_name, email: data.email, token })

    const message = 'Register successfully. Please check your email to verify account'
    const code = 201
    const response = {
      message,
      data,
      code
    }

    return Promise.resolve(response)
  } catch (error) {
    return Promise.reject(error)
  }
}

const verifyAccount = async (data) => {
  try {
    const { token } = data

    const checkToken = await TokenModel.findOne({ where: { token, deleted: false } })

    if (!checkToken) {
      return Promise.reject(new CustomError('Token not valid', 400))
    }

    const user_id = checkToken.dataValues.user_id

    await UserModel.update({ verify: false }, {
      where: { id: user_id }
    })

    return Promise.resolve(true)
  } catch (error) {
    return Promise.reject(error)
  }
}

module.exports = { logIn, register, verifyAccount }
