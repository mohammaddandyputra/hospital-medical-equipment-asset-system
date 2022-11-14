'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class BuildingFloor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  BuildingFloor.init({
    building_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    function: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    updated_by: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    deleted_by: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: null
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: null
    },
    deleted_at: {
      type: DataTypes.DATE,
      defaultValue: null
    }
  }, {
    sequelize,
    tableName: 'building_floors',
    createdAt: false,
    updatedAt: false
  })
  return BuildingFloor
}
