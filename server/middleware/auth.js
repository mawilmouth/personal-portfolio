const models = require('../models');

async function authMiddleware(req, res, next) {
  const authToken = req.header('auth-token');

  if (!authToken) return res.status(401).json({ msg: 'Unauthorized' });

  const user = await models.User.findOne({
    where: { authToken }
  });

  if (!user) return res.status(401).json({ msg: 'Unauthorized' });

  Object.assign(req, { currentUser: user });

  next();
}

module.exports = authMiddleware;