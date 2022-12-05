'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('building_floors', [{
      building_id: 1,
      name: 'Lantai 1'
    },
    {
      building_id: 1,
      name: 'Lantai 2'
    },
    {
      building_id: 1,
      name: 'Lantai 3'
    },
    {
      building_id: 2,
      name: 'Lantai 1'
    },
    {
      building_id: 1,
      name: 'Lantai 2'
    }], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
