require('dotenv').config()
const nodemailer = require('nodemailer')
const { MailTemplateModel } = require('../models')

const responseSuccess = (res, message, data, code) => {
  const responseMessage = {}

  Object.assign(responseMessage, {
    status: code,
    message,
    data
  })

  return res.status(code).json(responseMessage)
}

const responseFailed = (res, error, errorCode) => {
  return res.status(errorCode).json({
    status: errorCode,
    message: error
  })
}

const responseErrorValidate = (res, error, errorCode) => {
  return res.status(errorCode).json({
    message: error
  })
}

const randomString = (length) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

const pagination = (total, perpage, page, url) => {
  const next = parseInt(page, 10) + 1
  const prev = parseInt(page, 10) - 1
  const nextPage = `${url}?page=${next}&page_size=${perpage}`
  const previous = page > 1 ? `${url}?page=${prev}&page_size=${perpage}` : ''
  return {
    total_data: total || 0,
    total_pages: Math.ceil(total / perpage),
    current_page: page,
    next_page: nextPage,
    previous_page: previous,
    next,
    previous: prev
  }
}

const sendMail = async (req) => {
  try {
    const { to, subject, html } = req

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secureConnection: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    })

    const mailOptions = {
      from: process.env.MAIL_USER,
      to,
      subject,
      html
    }

    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
        return Promise.reject(error)
      }
      console.log(info)
    })

    return Promise.resolve(true)
  } catch (error) {
    return Promise.reject(error)
  }
}

const sendMailVerifyAccount = async (data) => {
  try {
    const { full_name, email, token } = data
    const template = await MailTemplateModel.findByPk(1)
    const dataTemplate = template.dataValues.template

    const link = `${process.env.BASE_URL}/verify-account?token=${token}`

    const outputHTML1 = dataTemplate.replace(/#{full_name}/i, full_name)
    const outputHTML2 = outputHTML1.replace(/#{link}/i, link)

    await sendMail({ to: email, subject: '[myApps] Verify Account', html: outputHTML2 })
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}

module.exports = {
  responseSuccess,
  responseFailed,
  responseErrorValidate,
  pagination,
  randomString,
  sendMailVerifyAccount
}
