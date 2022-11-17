const db = require('./db')

module.exports = {
  username: db.username,
  password: db.password,
  database: db.database,
  config: {
    database: {
      host: db.host,
      dialect: db.dialect
    }
  }
}
