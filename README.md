<h2 align="center">Michael Wilmouth</h2>
<div align="center">
  <img src="https://user-images.githubusercontent.com/40346489/99926173-c30af780-2d0e-11eb-991a-71574fe31fb4.png" alt="Michael Wilmouth Portrate" style="width: 200px; border-radius: 100%; margin: 30px 0px;">
</div>
<div>
  <h1 align="center">Personal Portfolio</h1>
  <div align="center">
    <img src="https://img.shields.io/github/issues/mawilmouth/WilmouthWorks" />
  </div>
  <p align="center" style="margin-bottom: 40px;">My name is Michael Wilmouth and I welcome to version two of my personal portfolio! You can view the working version of this app at <a href="https://wilmouthworks.herokuapp.com/">wilmouthworks.com</a>.</p>

  <h1>Usage</h1>
  <p>You may resuse this code as your own, all that I ask is for you to give credit where it's due!</p>
  <h1>Tech Used</h1>
  <ul>
    <li>Next.js</li>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>Postgres</li>
    <li>Sequelize ORM</li>
    <li>React</li>
    <li>Redux</li>
    <li>Typescript</li>
    <li>SCSS</li>
    <li>Foundation.CSS</li>
    <li>Sentry Reporting</li>
  </ul>

  <h1>The Why</h1>
  <p>I ended up choosing this tech stack due to it's flexibility and scalability. As a personal portfolio, Next.js and Typescript is overkill and not needed. However, with what I plan to use this app for in the future, it will be nice to have a foundation for building more complex feature of the site.</p>

  <h1>Installation</h1>
  <h4>Clone</h4>
  <pre>$ git clone https://github.com/mawilmouth/WilmouthWorks.git</pre>
  <h4>Install dependencies</h4>
  <pre>$ yarn install</pre>
  <h4>Create DB</h4>
  <pre>$ yarn sequelize db:create</pre>
  <h4>Run Migrations</h4>
  <pre>$ yarn db-cli db:migrate</pre>
  <h4>Seed DB with mock data</h4>
  <pre>$ yarn db-cli db:seed:all</pre>
  <h4>Run server</h4>
  <pre>$ yarn dev</pre>

  <h1>Setup</h1>
  <p>In order to get you email client setup, you must create a <code>.env.development.local</code> and set a few environment variables. I also chose to use Gmail as my SMTP host, so you will need a valid gmail account with an app password that you can use for this app.</p>
  <h4>Environment Variables</h4>
  <ul>
    <li>APP_ENV -> Current ENV of app</li>
    <li>APP_NAME -> Name of the App</li>
    <li>MAILER_EMAIL -> Email used as the sender</li>
    <li>MAILER_PASSWORD -> Sender email password</li>
    <li>MAILER_RECEIVER -> Email to receive the incomming emails</li>
    <li>MAILER_PORT -> Port for Nodemailer to use</li>
    <li>SENTRY_DSN -> Sentry organization DSN</li>
    <li>SENTRY_ORG -> Sentry organization name</li>
    <li>SENTRY_PROJECT -> Sentry project name</li>
    <li>SENTRY_AUTH_TOKEN -> Sentry project integration token</li>
    <li>DB_NAME -> Name of Postgres DB</li>
    <li>DB_HOST -> Host of Postgres DB</li>
    <li>DB_USERNAME -> Username to Postgres DB</li>
    <li>DB_PASSWORD -> Password to Postgres DB</li>
  </ul>
</div>
