const express = require('express');
const router = express.Router();
const helpers = require('../../helpers/api/admin/authorsHelper');
const Sentry = require('@sentry/node');

router.get('/', async (req, res) => {
  let status = 200;
  let response = {};
  const { blog } = req.currentUser;

  const authors = await blog.getAuthors();

  Object.assign(response, { authors });

  res.status(status).json(response);
});

router.get('/:id', async (req, res) => {
  let status = 200;
  let response = {};
  const { blog } = req.currentUser;
  
  const authorResult = await blog.getAuthors({
    where: { id: req.params.id }
  });

  if (!authorResult.length) {
    Object.assign(response, { messages: [`Author ${req.params.id} cannot be found.`] });
    return res.status(404).json(response);
  }

  const author = authorResult['0'];

  Object.assign(response, { author });

  res.status(status).json(response);
});

router.post('/', async (req, res) => {
  let status = 200;
  let response = {};
  const { blog } = req.currentUser;

  const errors = helpers.validateCreateAuthorInputs(req.body);

  if (errors.length) {
    Object.assign(response, { messages: errors });
    return res.status(400).json(response);
  }

  const { firstName, lastName } = req.body;

  let existingAuthors = await blog.countAuthors({ where: { firstName, lastName } });

  if (existingAuthors) {
    Object.assign(response, {
      messages: ['A author with this name already exists. First and last name must be unique.']
    });
    return res.status(400).json(response);
  }

  try {
    await blog.createAuthor({ firstName, lastName });
  } catch (ex) {
    Object.assign(response, {
      messages: ['There was an error creating the author. Please try again or contact support.']
    });
    Sentry.captureException(ex);
    return res.status(500).json(response);
  }

  const result = await blog.getAuthors({ where: { firstName, lastName } });
  const author = result['0'];

  Object.assign(response, { author });

  res.status(status).json(response);
});

router.patch('/:id', async (req, res) => {
  let status = 200;
  let response = {};
  const { blog } = req.currentUser;

  const errors = helpers.validateCreateAuthorInputs(req.body);

  if (errors.length) {
    Object.assign(response, { messages: errors });
    return res.status(400).json(response);
  }
  
  const getAuthorResult = await blog.getAuthors({
    where: { id: req.params.id }
  });

  if (!getAuthorResult.length) {
    Object.assign(response, { messages: [`Author ${req.params.id} cannot be found.`] });
    return res.status(404).json(response);
  }

  const author = getAuthorResult['0'];

  const { firstName, lastName } = req.body;

  await author.update({ firstName, lastName });

  Object.assign(response, { author });

  res.status(status).json(response);
});

router.delete('/:id', async (req, res) => {
  let status = 200;
  let response = {};
  const { blog } = req.currentUser;
  
  let getAuthorResult = await blog.getAuthors({
    where: { id: req.params.id }
  });

  if (!getAuthorResult.length) {
    Object.assign(response, { messages: [`Author ${req.params.id} cannot be found.`] });
    return res.status(404).json(response);
  }

  const author = getAuthorResult['0'];

  try {
    await author.destroy();
  } catch (ex) {
    Sentry.captureException(ex);
  }

  getAuthorResult = await blog.getAuthors({
    where: { id: req.params.id }
  });

  if (getAuthorResult.length) {
    const msg = `Author ${req.params.id} cannot be deleted.`;
    Object.assign(response, { messages: [msg] });
    Sentry.captureException(msg);
    return res.status(500).json(response);
  }

  Object.assign(response, { messages: [`Author ${req.params.id} has been deleted.`] });

  res.status(status).json(response);
});

module.exports = router;