const express = require('express');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const models = require('../models');
const { validateUserInputs } = require('../helpers/api/userHelpers');

const router = express.Router();

router.post('/', async (req, res) => {
  let status = 200;
  let response = {};

  const valid = validateUserInputs(req.body);

  if (!valid) {
    status = 400;
    Object.assign(response, { msg: 'Bad Request' });
  } else {
    const {
      firstName,
      lastName,
      username,
      email,
      password
    } = req.body;

    const existingUser = await models.users.findOne({
      where: { username }
    });

    if (existingUser) {
      status = 400;
      Object.assign(response, { msg: `${username} is already taken. Please try again.` });
    } else {
      const authToken = uuid.v4();
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);

      const user = await models.users.create({
        firstName,
        lastName,
        username,
        email,
        password: hash,
        authToken
      });

      Object.assign(response, {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email
      });

      res.set('auth-token', authToken);
    }
  }

  res.status(status).json(response).end();
});

module.exports = router;