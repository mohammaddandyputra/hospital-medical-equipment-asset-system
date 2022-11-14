'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('medical_equipments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      building_room_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'building_rooms',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      merk: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sn: {
        type: Sequelize.STRING,
        allowNull: false
      },
      purchase_price: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      source_of_funds: {
        type: Sequelize.STRING,
        allowNull: true
      },
      condition: {
        type: Sequelize.STRING,
        allowNull: true
      },
      ownership_type: {
        type: Sequelize.STRING,
        allowNull: true
      },
      procurement_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      operating_year: {
        type: Sequelize.DATE,
        allowNull: true
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
      updated_by: {
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
      updated_at: {
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
    await queryInterface.dropTable('medical_equipments')
  }
}
