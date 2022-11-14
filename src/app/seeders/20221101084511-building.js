'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('buildings', [{
      name: 'Gedung A',
      procurement_date: new Date().toISOString(),
      operating_year: new Date().toISOString(),
      purchase_price: 10000000000,
      source_of_funds: 'APBN'
    },
    {
      name: 'Gedung B',
      procurement_date: new Date().toISOString(),
      operating_year: new Date().toISOString(),
      purchase_price: 15000000000,
      source_of_funds: 'APBN'
    }
    ], {})
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
