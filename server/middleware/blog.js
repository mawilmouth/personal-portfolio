async function setBlog(req, _, next) {
  const blog = await req.currentUser.getBlog();

  Object.assign(req, { currentUser: { blog, ...req.currentUser } });

  next();
}

module.exports = setBlog;