const { check } = require('express-validator')

const signInValidation = () => {
  return [
    check('email').notEmpty().isEmail(),
    check('password').notEmpty().isString()
  ]
}

const signUpValidation = () => {
  return [
    check('first_name').notEmpty().isString(),
    check('last_name').notEmpty().isString(),
    check('email').notEmpty().isEmail(),
    check('password').notEmpty().isString()
  ]
}

module.exports = {
  signInValidation,
  signUpValidation
}
