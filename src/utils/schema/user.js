const { check } = require('express-validator')

const getUserListValidation = () => {
  return [
    check('page').notEmpty().isInt().default(1),
    check('page_size').notEmpty().isInt().default(10)
  ]
}

const detailUserValidation = () => {
  return [check('id').notEmpty().isInt()]
}

const updateUserValidation = () => {
  return [
    check('first_name').notEmpty().isString(),
    check('last_name').isString().default('')
  ]
}

module.exports = {
  getUserListValidation,
  updateUserValidation,
  detailUserValidation
}
