const { responseSuccess, responseErrorValidate } = require('../../utils')
const { logIn, register, verifyAccount } = require('../../services')
const { validationResult } = require('express-validator')

const signIn = async (req, res, next) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return responseErrorValidate(res, errors.array(), 422)
    }

    const data = await logIn({ ...req.body })
    return responseSuccess(res, 'User found', data, 200)
  } catch (error) {
    next(error)
  }
}

const signUp = async (req, res, next) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return responseErrorValidate(res, errors.array(), 422)
    }

    const { message, data, code } = await register({
      ...req.body,
      ...{
        verify: true,
        deleted: false,
        created_at: new Date().toISOString()
      }
    })

    return responseSuccess(res, message, data, code)
  } catch (error) {
    next(error)
  }
}

const verify = async (req, res, next) => {
  try {
    const data = await verifyAccount({ token: req.query.token })

    return responseSuccess(res, 'Verification successful', data, 200)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  signIn,
  signUp,
  verify
}
