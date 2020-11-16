const nodemailer = require('nodemailer');
const { ENV } = require('../constants/environments');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: ENV.mailer.port,
  secure: false,
  requireTLS: true,
  auth: {
      user: ENV.mailer.email,
      pass: ENV.mailer.password
  }
});

export const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from,
    to: ENV.mailer.receiver,
    subject: `Wilmouth Works - Contact From: ${from}`,
    text,
    replyTo: from
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}
