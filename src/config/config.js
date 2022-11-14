const db = require('./db')

module.exports = {
  // database: {
  username: db.USER,
  password: db.PASSWORD,
  database: db.DB,
  config: {
    database: {
      host: db.HOST,
      dialect: db.dialect
    }
  }
}
