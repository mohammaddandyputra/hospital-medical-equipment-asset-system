const JWT = require('jsonwebtoken')
require('dotenv').config()

exports.verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.json({ status: 401, message: 'Unauthorized' })
  }

  const token = authHeader.split(' ')[1]
  JWT.verify(
    token,
    process.env.APP_JWT_KEY,
    (err, decoded) => {
      if (err) {
        return res.json({ status: 403, message: 'Forbidden' })
      }
      next()
    }
  )
}
