require('dotenv').config()
const Sequelize = require('sequelize')
const config = require('../../config/config')
const sequelize = new Sequelize(config.database, config.username, config.password, config.config.database)

// Model
const MailTemplateModel = require('./mail')(sequelize, Sequelize.DataTypes)

module.exports = {
  MailTemplateModel
}
