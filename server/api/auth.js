const express = require('express');
const models = require('../models');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const helpers = require('../helpers/api/authHelpers');
const router = express.Router();

router.post('/sign_in', async (req, res) => {
  let status = 200;
  let response = {};

  const isValid = helpers.validateSignInBody(req.body);

  if (!isValid) {
    Object.assign(response, { msg: 'Bad Request' });
    return res.status(400).json(response);
  }

  let user = await models.User.findOne({
    where: { username: req.body.username }
  });

  if (!user) {
    Object.assign(response, { msg: 'Username or password does not match' });
    return res.status(401).json(response);
  }

  const match = bcrypt.compareSync('password', user.password);

  if (!match) {
    Object.assign(response, { msg: 'Username or password does not match' });
    return res.status(401).json(response);
  }

  const authToken = user.authToken || uuid.v4();

  if (!user.authToken) {
    await user.update({ authToken });
  }

  res.set('auth-token', authToken);

  Object.assign(response, {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email
  });

  res.status(status).json(response);
});

router.post('/sign_out', async (req, res) => {
  let status = 200;
  let response = {};

  const isValid = helpers.validateSignOutBody(req.body);

  if (!isValid) {
    Object.assign(response, { message: 'Bad Request' });
    return res.status(400).json(response);
  }

  const authToken = req.header('auth-token');
  const user = await models.User.findOne({
    where: { id: req.body.id }
  });

  if (!user) {
    Object.assign(response, { message: 'User not found' });
    return res.status(404).json(response);
  }

  if (!authToken || authToken !== user.authToken) {
    Object.assign(response, { message: 'Unauthorized' });
    return res.status(401).json(response);
  }

  await user.update({ authToken: null });

  Object.assign(response, { message: `Successfully signed out ${user.username}.` });

  res.status(status).json(response);
});

module.exports = router;