'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class MailTemplate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  MailTemplate.init({
    title: {
      type: DataTypes.STRING
    },
    template: {
      type: DataTypes.TEXT
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
    tableName: 'mail_templates',
    createdAt: false,
    updatedAt: false
  })
  return MailTemplate
}
