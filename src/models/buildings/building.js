const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Building extends Model {
    /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
    static associate (models) {
      // define association here
    }
  }
  Building.init({
    name: {
      type: DataTypes.STRING
    },
    procurement_date: {
      type: DataTypes.DATE,
      defaultValue: null
    },
    operating_year: {
      type: DataTypes.DATE,
      defaultValue: null
    },
    purchase_price: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    source_of_funds: {
      type: DataTypes.STRING,
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
    tableName: 'buildings',
    createdAt: false,
    updatedAt: false
  })
  return Building
}
