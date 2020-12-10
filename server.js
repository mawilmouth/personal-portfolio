const express = require('express');
const next = require('next');
const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutes
  max: 5 // limit each IP to 5 requests per windowMs
});

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const bodyParser = require('body-parser')


nextApp.prepare().then(() => {
  const app = express();

  // Middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use('/api/contact', apiLimiter);

  // Routes
  app.get('*', (req, res) => handle(req, res));

  app.use('/api/contact', require('./api/contact'));

  app.listen(port, host, (err) => {
    if (err) throw err;
    console.log(`> Ready on ${port}`);
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});