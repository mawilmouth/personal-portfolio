const express = require('express');
const router = express.Router();
const helpers = require('../../helpers/api/admin/blogsHelper');
const uuid = require('uuid');

router.get('/', async (req, res) => {
  let status = 200;
  let response = {};
  const { blog } = req.currentUser;

  Object.assign(response, { blog });

  res.status(status).json(response);
});

router.patch('/', async (req, res) => {
  let status = 200;
  let response = {};
  const { blog } = req.currentUser;

  const errors = helpers.validateBlogUpdateInputs(req.body);

  if (errors.length) {
    Object.assign(response, { messages: errors });
    return res.status(400).json(response);
  }

  const { name } = req.body;

  await blog.update({ name });

  Object.assign(response, { blog });

  res.status(status).json(response);
});

router.patch('/token', async (req, res) => {
  let status = 200;
  let response = {};
  const { blog } = req.currentUser;
  const newKey = uuid.v4();

  await blog.update({ apiKey: newKey });

  Object.assign(response, { blog });

  res.status(status).json(response);
});

module.exports = router;