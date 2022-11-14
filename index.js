const express = require('express')
const app = express()
const routes = require('./src/routes')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

require('dotenv').config()

app.use(routes)

const PORT = process.env.APP_PORT
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
