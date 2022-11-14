require('dotenv').config()
const Sequelize = require('sequelize')
const config = require('../../config/config')
const sequelize = new Sequelize(config.database, config.username, config.password, config.config.database)

// Model
const MedicalEquipmentModel = require('./medical_equipment')(sequelize, Sequelize.DataTypes)

module.exports = {
  MedicalEquipmentModel
}
