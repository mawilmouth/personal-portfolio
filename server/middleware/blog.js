const models = require('../models');

async function setBlog(req, _, next) {
  const blog = await req.currentUser.getBlog();

  Object.assign(req, { currentUser: { blog, ...req.currentUser } });

  next();
}

async function setPublicBlog(req, res, next) {
  const key = req.header('key');

  if (!key) return res.status(401).json({ msg: 'Unauthorized' });

  const blog = await models.Blog.findOne({
    where: { apiKey: key }
  });

  if (!blog) return res.status(404).json({ msg: 'Blog not found' });

  Object.assign(req, { currentBlog: blog });

  next();
}

module.exports = {
  setBlog,
  setPublicBlog
};