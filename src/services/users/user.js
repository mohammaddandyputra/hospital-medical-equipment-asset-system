const { UserModel } = require('../../models')
const _ = require('lodash')
const { pagination } = require('../../utils')

const userList = async (req) => {
  try {
    const { page, page_size } = req

    const limit = page_size
    const offset = (page - 1) * page_size
    const attributes = ['id', 'first_name', 'last_name', 'email']
    const order = [['id', 'ASC']]

    const users = await UserModel.findAndCountAll({ attributes, limit, offset, order })

    const response = {
      data: users,
      pagination: pagination(users.count, page_size, page, '/users/')
    }

    return Promise.resolve(response)
  } catch (error) {
    return Promise.reject(error)
  }
}

const userDetail = async (req) => {
  try {
    const { id } = req
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
