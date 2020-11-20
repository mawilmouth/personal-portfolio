module.exports = {
  env: {
    mailer: {
      MAILER_EMAIL: process.env.MAILER_EMAIL,
      MAILER_PASSWORD: process.env.MAILER_PASSWORD,
      MAILER_RECEIVER: process.env.MAILER_RECEIVER,
      MAILER_PORT: process.env.MAILER_PORT
    }
  },
}