const SentryWebpackPlugin = require("@sentry/webpack-plugin");

module.exports = {
  env: {
    APP_ENV: process.env.APP_ENV,
    APP_NAME: process.env.APP_NAME,
    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    mailer: {
      MAILER_EMAIL: process.env.MAILER_EMAIL,
      MAILER_PASSWORD: process.env.MAILER_PASSWORD,
      MAILER_RECEIVER: process.env.MAILER_RECEIVER,
      MAILER_PORT: process.env.MAILER_PORT
    }
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    if (!dev) {
      config.plugins.push(
        new SentryWebpackPlugin({
          authToken: process.env.SENTRY_AUTH_TOKEN,
          org: process.env.APP_NAME,
          project: process.env.APP_NAME,
          include: ".",
          ignore: ["node_modules", "webpack.config.js"],
        })
      );
    }

    return config;
  },
}