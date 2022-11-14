const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
    static associate (models) {
      // define association here
    }
  }
  User.init({
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    verify: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    last_login: {
      type: DataTypes.DATE,
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
    tableName: 'users',
    createdAt: false,
    updatedAt: false
  })
  return User
}
