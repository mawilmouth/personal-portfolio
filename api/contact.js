const express = require('express');
const router = express.Router();
const { send } = require('../utils/mailer');
const { validateContactEntries } = require('../helpers/api/ContactHelpers');

router.post('/', async (req, res) => {
  const { firstName, lastName, email, message } = req.body.data;
  const entries = { firstName, lastName, email, message };
  let status = 200;
  let messages = validateContactEntries(entries);

  if (messages.length) status = 400;

  if (status !== 400) {
    const name = `${firstName} ${lastName}`;

    try {
      await send({ name, email, text: message });
      messages = [`Your message has been sent!`];
    } catch {
      status = 500;
      messages = ['There was an error sending your message. Please try again later.'];
    }
  }

  res.status(status).json({ messages });
});

module.exports = router;