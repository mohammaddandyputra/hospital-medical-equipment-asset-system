'use strict'
const {
  Model
} = require('sequelize')

const { BuildingRoom } = require('..')
module.exports = (sequelize, DataTypes) => {
  class MedicalEquipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate (models) {
    //   MedicalEquipment.hasOne(models.BuildingRoom, { as: 'room' })
    // }
  }
  MedicalEquipment.init({
    building_room_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
    },
    merk: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    sn: {
      type: DataTypes.STRING
    },
    purchase_price: {
      type: DataTypes.INTEGER
    },
    source_of_funds: {
      type: DataTypes.STRING
    },
    condition: {
      type: DataTypes.STRING
    },
    ownership_type: {
      type: DataTypes.STRING
    },
    procurement_date: {
      type: DataTypes.DATE
    },
    operating_year: {
      type: DataTypes.DATE
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
    tableName: 'medical_equipments',
    createdAt: false,
    updatedAt: false
  })

  MedicalEquipment.hasMany(BuildingRoom)

  return MedicalEquipment
}
