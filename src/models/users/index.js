require('dotenv').config()
const Sequelize = require('sequelize')
const config = require('../../config/config')
const sequelize = new Sequelize(config.database, config.username, config.password, config.config.database)

// Model
const UserModel = require('./user')(sequelize, Sequelize.DataTypes)

module.exports = {
  UserModel
}
