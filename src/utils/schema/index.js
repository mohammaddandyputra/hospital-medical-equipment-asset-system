const UserSchema = require('./user')
const AuthSchema = require('./auth')

module.exports = {
  ...UserSchema,
  ...AuthSchema
}
