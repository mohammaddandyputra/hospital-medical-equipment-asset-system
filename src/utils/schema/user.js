const { check } = require('express-validator')

const detailUserValidation = () => {
  return [check('first_name').notEmpty().isInt()]
}

const updateUserValidation = () => {
  return [
    check('first_name').notEmpty().isString(),
    check('last_name').isString().default('')
  ]
}

module.exports = {
  updateUserValidation,
  detailUserValidation
}
