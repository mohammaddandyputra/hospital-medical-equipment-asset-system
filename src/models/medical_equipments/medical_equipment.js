'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class MedicalEquipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  MedicalEquipment.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'medical_equipments',
    createdAt: false,
    updatedAt: false
  })
  return MedicalEquipment
}
