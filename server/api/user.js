const express = require('express');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const models = require('../models');
const helpers = require('../helpers/api/userHelpers');
const router = express.Router();

router.post('/', async (req, res) => {
  let status = 200;
  let response = {};

  const valid = helpers.validateUserInputs(req.body);

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
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email
      });

      res.set('auth-token', authToken);
    }
  }

  res.status(status).json(response);
});

router.patch('/:id', async (req, res) => {
  let status = 200;
  let response = {};

  const validParam = helpers.validateIdParam(req.params.id);
  const validBody = helpers.validateUserUpdateInputs(req.body);
  const authToken = req.header('auth-token');

  if (!validParam || !validBody) {
    Object.assign(response, { msg: 'Bad Request' });
    return res.status(401).json(response);
  }

  let user = await models.users.findOne({
    where: { id: req.params.id }
  });

  if (!user) {
    Object.assign(response, { msg: 'User not found' });
    return res.status(404).json(response);
  }

  if (!authToken || user.authToken !== authToken) {
    Object.assign(response, { msg: 'Unauthorized' });
    return res.status(401).json(response);
  }

  const newAuthToken = uuid.v4();

  await models.users.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    authToken: newAuthToken    
  }, {
    where: { id: req.params.id }
  });

  user = await models.users.findOne({
    where: { id: req.params.id }
  });

  Object.assign(response, {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email
  });

  res.set('auth-token', newAuthToken);

  res.status(status).json(response);
});

module.exports = router;