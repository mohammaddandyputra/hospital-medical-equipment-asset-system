const { UserModel } = require('../../models')
const _ = require('lodash')

const userList = async () => {
  try {
    const attributes = ['id', 'first_name', 'last_name', 'email']
    const data = await UserModel.findAll({ attributes })

    return Promise.resolve(data)
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
