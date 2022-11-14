const Users = require('./users')
const Buildings = require('./buildings')
const MedicalEquipments = require('./medical_equipments')
const Tokens = require('./tokens')
const Templates = require('./templates')

module.exports = {
  ...Users,
  ...Buildings,
  ...MedicalEquipments,
  ...Tokens,
  ...Templates
}
