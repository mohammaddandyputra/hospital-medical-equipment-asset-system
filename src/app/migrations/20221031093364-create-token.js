'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      token: {
        type: Sequelize.STRING
      },
      deleted: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      deleted_by: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Tokens')
  }
}
