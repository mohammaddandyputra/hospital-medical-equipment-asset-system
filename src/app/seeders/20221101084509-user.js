'use strict'
const bcrypt = require('bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      first_name: 'Mohammad Dandy',
      last_name: 'Putra',
      email: 'putradandy619@gmail.com',
      password: bcrypt.hashSync('123123', 10),
      verify: false
    }, {
      first_name: 'Elydha Rachma',
      last_name: 'Dianti',
      email: 'elydha@gmail.com',
      password: bcrypt.hashSync('123123', 10),
      verify: false
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
