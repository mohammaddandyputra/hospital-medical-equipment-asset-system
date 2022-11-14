const UserServices = require('./users')
const AuthServices = require('./auths')
const BuildingServices = require('./buildings')

module.exports = {
  ...UserServices,
  ...AuthServices,
  ...BuildingServices
}
