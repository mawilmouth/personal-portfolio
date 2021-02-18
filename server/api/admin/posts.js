const express = require('express');
const router = express.Router();
const helpers = require('../../helpers/api/admin/postsHelper');
const Sentry = require('@sentry/node');

router.get('/', async (req, res) => {
  let status = 200;
  let response = {};
  const { blog } = req.currentUser;

  const posts = await blog.getPosts();

  Object.assign(response, { posts });

  res.status(status).json(response);
});

router.get('/:id', async (req, res) => {
  let status = 200;
  let response = {};
  const { blog } = req.currentUser;
  
  const postResult = await blog.getPosts({
    where: { id: req.params.id }
  });

  if (!postResult.length) {
    Object.assign(response, { messages: [`Post ${req.params.id} cannot be found.`] });
    return res.status(404).json(response);
  }

  const post = postResult['0'];

  Object.assign(response, { post });

  res.status(status).json(response);
});

router.post('/', async (req, res) => {
  let status = 200;
  let response = {};
  const { blog } = req.currentUser;

  const errors = helpers.validateCreatePostInputs(req.body);

  if (errors.length) {
    Object.assign(response, { messages: errors });
    return res.status(400).json(response);
  }

  const { slug, title, subtitle, content, releaseDate, authorId, draft } = req.body;

  let existingPosts = await blog.countPosts({ where: { slug } });

  if (existingPosts) {
    Object.assign(response, {
      messages: ['A post with this slug already exists. Slugs must be unique.']
    });
    return res.status(400).json(response);
  }

  try {
    await blog.createPost({ slug, title, subtitle, content, releaseDate, authorId, draft });
  } catch (ex) {
    Object.assign(response, {
      messages: ['There was an error creating the post. Please try again or contact support.']
    });
    Sentry.captureException(ex);
    return res.status(500).json(response);
  }

  const result = await blog.getPosts({ where: { slug } });
  const post = result['0'];

  Object.assign(response, { post });

  res.status(status).json(response);
});

router.patch('/:id', async (req, res) => {
  let status = 200;
  let response = {};
  const { blog } = req.currentUser;

  const errors = helpers.validateCreatePostInputs(req.body);

  if (errors.length) {
    Object.assign(response, { messages: errors });
    return res.status(400).json(response);
  }
  
  const getPostResult = await blog.getPosts({
    where: { id: req.params.id }
  });

  if (!getPostResult.length) {
    Object.assign(response, { messages: [`Post ${req.params.id} cannot be found.`] });
    return res.status(404).json(response);
  }

  const post = getPostResult['0'];

  const { slug, title, subtitle, content, authorId, draft, releaseDate } = req.body;

  await post.update({ slug, title, subtitle, content, authorId, draft, releaseDate });

  Object.assign(response, { post });

  res.status(status).json(response);
});

router.delete('/:id', async (req, res) => {
  let status = 200;
  let response = {};
  const { blog } = req.currentUser;
  
  let getPostResult = await blog.getPosts({
    where: { id: req.params.id }
  });

  if (!getPostResult.length) {
    Object.assign(response, { messages: [`Post ${req.params.id} cannot be found.`] });
    return res.status(404).json(response);
  }

  const post = getPostResult['0'];

  try {
    await post.destroy();
  } catch (ex) {
    Sentry.captureException(ex);
  }

  getPostResult = await blog.getPosts({
    where: { id: req.params.id }
  });

  if (getPostResult.length) {
    const msg = `Post ${req.params.id} cannot be deleted.`;
    Object.assign(response, { messages: [msg] });
    Sentry.captureException(msg);
    return res.status(500).json(response);
  }

  Object.assign(response, { messages: [`Post ${req.params.id} has been deleted.`] });

  res.status(status).json(response);
});

module.exports = router;