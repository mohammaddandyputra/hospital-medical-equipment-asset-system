require('dotenv').config()
const Sequelize = require('sequelize')
const config = require('../../config/config')
const sequelize = new Sequelize(config.database, config.username, config.password, config.config.database)

// Model
const BuildingModel = require('./building')(sequelize, Sequelize.DataTypes)
const BuildingFloorModel = require('./building_floor')(sequelize, Sequelize.DataTypes)
const BuildingRoomModel = require('./building_room')(sequelize, Sequelize.DataTypes)

module.exports = {
  BuildingModel,
  BuildingFloorModel,
  BuildingRoomModel
}
