const express = require('express');
const next = require('next');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');
const db = require('./server/connection');
const colors = require('./server/helpers/logging/colors');
const authMiddleware = require('./server/middleware/auth');
const blogMiddleware = require('./server/middleware/blog');

const apiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutes
  max: 5 // limit each IP to 5 requests per windowMs
});

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const bodyParser = require('body-parser');

nextApp.prepare().then(() => {
  const app = express();

  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: 1.0,
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new Tracing.Integrations.Express({ app }),
    ]
  });

  // Middleware
  app.use(Sentry.Handlers.requestHandler());
  app.use(Sentry.Handlers.tracingHandler());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use('/api/contact', apiLimiter);
  app.use('/api/user', apiLimiter);
  app.use('/api/auth', apiLimiter);
  app.use('/api/admin', authMiddleware);
  app.use('/api/admin', blogMiddleware);

  // Public Routes
  app.use('/api/contact', require('./server/api/contact'));
  app.use('/api/user', require('./server/api/user'));
  app.use('/api/auth', require('./server/api/auth'));

  // Private Routes
  app.use('/api/admin/posts', require('./server/api/admin/posts'));
  app.use('/api/admin/categories', require('./server/api/admin/categories'));
  app.use('/api/admin/authors', require('./server/api/admin/authors'));

  // Catch All Routes
  app.get('*', (req, res) => handle(req, res));
  
  app.use(Sentry.Handlers.errorHandler());

  app.listen(port, host, (ex) => {
    if (ex) throw ex;
    console.log(colors.fg.Magenta, `[app]: Ready on ${port}`);
  });

  db.authenticate().then(() => {
    console.log(colors.fg.Magenta, '[app]: DB connection established');
  }).catch((ex) => {
    console.log(colors.fg.Red, '[app]: DB connection falied', ex);
    throw ex;
  });
}).catch((ex) => {
  Sentry.captureException(ex);
  console.error(colors.fg.Red, ex.stack);
  process.exit(1);
});