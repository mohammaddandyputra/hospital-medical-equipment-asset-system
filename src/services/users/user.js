const { UserModel } = require('../../models')
const _ = require('lodash')
const { pagination } = require('../../utils')

const userList = async (req) => {
  try {
    // const { page, page_size } = req
    const attributes = ['id', 'first_name', 'last_name', 'email']
    const users = await UserModel.findAll({ attributes })

    // const response = {
    //   data: users,
    //   pagination: pagination(users.length, page, page_size, '/users/')
    // }

    return Promise.resolve(users)
  } catch (error) {
    return Promise.reject(error)
  }
}

const userDetail = async (id) => {
  try {
    const attributes = ['id', 'first_name', 'last_name', 'email']
    const data = await UserModel.findByPk(id, { attributes })

    return Promise.resolve(data)
  } catch (error) {
    return Promise.reject(error)
  }
}

const updateUserDetail = async (req) => {
  try {
    const { id } = req
    const body = _.pick(req, ['full_name', 'last_name', 'verify'])

    const update = await UserModel.update({ ...body }, { where: { id } })

    return Promise.resolve(update)
  } catch (error) {
    return Promise.reject(error)
  }
}

module.exports = {
  userList,
  userDetail,
  updateUserDetail
}
