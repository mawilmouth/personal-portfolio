const express = require('express');
const router = express.Router();
const helpers = require('../../helpers/api/admin/categoriesHelper');
const Sentry = require('@sentry/node');

router.get('/', async (req, res) => {
  let status = 200;
  let response = {};
  const { blog } = req.currentUser;

  const categories = await blog.getCategories();

  Object.assign(response, { categories });

  res.status(status).json(response);
});

router.get('/:id', async (req, res) => {
  let status = 200;
  let response = {};
  const { blog } = req.currentUser;
  
  const categoryResult = await blog.getCategories({
    where: { id: req.params.id }
  });

  if (!categoryResult.length) {
    Object.assign(response, { messages: [`Category ${req.params.id} cannot be found.`] });
    return res.status(404).json(response);
  }

  const category = categoryResult['0'];

  Object.assign(response, { category });

  res.status(status).json(response);
});

router.post('/', async (req, res) => {
  let status = 200;
  let response = {};
  const { blog } = req.currentUser;

  const errors = helpers.validateCreateCategoryInputs(req.body);

  if (errors.length) {
    Object.assign(response, { messages: errors });
    return res.status(400).json(response);
  }

  const { slug, name } = req.body;

  let existingCategories = await blog.countCategories({ where: { slug } });

  if (existingCategories) {
    Object.assign(response, {
      messages: ['A category with this slug already exists. Slugs must be unique.']
    });
    return res.status(400).json(response);
  }

  try {
    await blog.createCategory({ slug, name });
  } catch (ex) {
    Object.assign(response, {
      messages: ['There was an error creating the category. Please try again or contact support.']
    });
    Sentry.captureException(ex);
    return res.status(500).json(response);
  }

  const result = await blog.getCategories({ where: { slug } });
  const category = result['0'];

  Object.assign(response, { category });

  res.status(status).json(response);
});

router.patch('/:id', async (req, res) => {
  let status = 200;
  let response = {};
  const { blog } = req.currentUser;

  const errors = helpers.validateCreateCategoryInputs(req.body);

  if (errors.length) {
    Object.assign(response, { messages: errors });
    return res.status(400).json(response);
  }
  
  const getCategoryResult = await blog.getCategories({
    where: { id: req.params.id }
  });

  if (!getCategoryResult.length) {
    Object.assign(response, { messages: [`Category ${req.params.id} cannot be found.`] });
    return res.status(404).json(response);
  }

  const category = getCategoryResult['0'];

  const { slug, name } = req.body;

  await category.update({ slug, name});

  Object.assign(response, { category });

  res.status(status).json(response);
});

router.delete('/:id', async (req, res) => {
  let status = 200;
  let response = {};
  const { blog } = req.currentUser;
  
  let getCategoryResult = await blog.getCategories({
    where: { id: req.params.id }
  });

  if (!getCategoryResult.length) {
    Object.assign(response, { messages: [`Category ${req.params.id} cannot be found.`] });
    return res.status(404).json(response);
  }

  const category = getCategoryResult['0'];

  try {
    await category.destroy();
  } catch (ex) {
    Sentry.captureException(ex);
  }

  getCategoryResult = await blog.getCategories({
    where: { id: req.params.id }
  });

  if (getCategoryResult.length) {
    const msg = `Category ${req.params.id} cannot be deleted.`;
    Object.assign(response, { messages: [msg] });
    Sentry.captureException(msg);
    return res.status(500).json(response);
  }

  Object.assign(response, { messages: [`Category ${req.params.id} has been deleted.`] });

  res.status(status).json(response);
});

module.exports = router;