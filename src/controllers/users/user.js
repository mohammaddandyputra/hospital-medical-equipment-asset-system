const { userList, userDetail, updateUserDetail } = require('../../services')
const { responseSuccess, responseErrorValidate } = require('../../utils')
const { validationResult } = require('express-validator')

const getUserList = async (req, res, next) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return responseErrorValidate(res, errors.array(), 422)
    }

    const data = await userList({ ...req.query, page: req.query.page })
    return responseSuccess(res, 'User Lists', data, 200)
  } catch (error) {
    next(error)
  }
}

const getUserDetail = async (req, res, next) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return responseErrorValidate(res, errors.array(), 422)
    }

    const data = await userDetail({ ...req.params })
    return responseSuccess(res, 'User Detail', data, 200)
  } catch (error) {
    next(error)
  }
}

const updateUser = async (req, res, next) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return responseErrorValidate(res, errors.array(), 422)
    }

    const data = await updateUserDetail({
      ...req.params,
      ...req.body
    })

    return responseSuccess(res, 'Update user succes.', data, 200)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getUserList,
  getUserDetail,
  updateUser
}
