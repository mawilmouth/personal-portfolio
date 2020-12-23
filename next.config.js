const SentryWebpackPlugin = require("@sentry/webpack-plugin");
const {
  APP_ENV,
  APP_NAME,
  SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
  MAILER_EMAIL,
  MAILER_PASSWORD,
  MAILER_RECEIVER,
  MAILER_PORT
} = process.env;

module.exports = {
  env: {
    APP_ENV,
    APP_NAME,
    SENTRY_DSN,
    SENTRY_ORG,
    SENTRY_PROJECT,
    SENTRY_AUTH_TOKEN,
    mailer: {
      MAILER_EMAIL,
      MAILER_PASSWORD,
      MAILER_RECEIVER,
      MAILER_PORT
    }
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    config.plugins.push(
      new SentryWebpackPlugin({
        authToken: SENTRY_AUTH_TOKEN,
        org: SENTRY_ORG,
        project: SENTRY_PROJECT,
        include: ".",
        ignore: ["node_modules", "webpack.config.js"],
        configFile: './.sentryclirc'
      })
    );

    return config;
  },
}