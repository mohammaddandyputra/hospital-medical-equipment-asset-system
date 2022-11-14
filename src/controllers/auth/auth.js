const { responseSuccess, responseFailed } = require('../../utils')
const { logIn, register, verifyAccount } = require('../../services')

const signIn = async (req, res) => {
  try {
    const data = await logIn({ ...req.body })
    return responseSuccess(res, 'User found', data, 200)
  } catch (error) {
    return responseFailed(res, error.message, error.errorCode)
  }
}

const signUp = async (req, res) => {
  try {
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
    return responseFailed(res, error.message, error.errorCode)
  }
}

const verify = async (req, res) => {
  try {
    const data = await verifyAccount({ token: req.query.token })

    return responseSuccess(res, 'Verification successful', data, 200)
  } catch (error) {
    return responseFailed(res, error.message, error.errorCode)
  }
}

module.exports = {
  signIn,
  signUp,
  verify
}
