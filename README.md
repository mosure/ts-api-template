# API Template

## [Express](https://github.com/expressjs/express)

This template uses `express` which has many examples and a lot of middlewares.

## [Inversify](https://github.com/inversify/InversifyJS)

This template uses `InversifyJS` for IoC and DI. See `./src/inversify.config.ts` for bindings and `./src/types.ts` for types.

### [inversify-express-utils](https://github.com/inversify/inversify-express-utils)

This template uses `inversify-express-utils` for express DI. An example controller can be found at `./src/controllers/example_controller.ts`. These controllers look very similar to `.NET Core MVC` controllers.

## [Serverless](https://github.com/serverless/serverless)

This template is setup to run/deploy through `serverless` and works really well with AWS Lambda Functions. We use a single lambda function for the entire API to reduce the frequency of cold starts. See the `Webpack` section on further techniques for cold start latency reduction.

See `./serverless.yml` for serverless configuration.

## [Webpack](https://github.com/webpack/webpack)

This template uses `webpack` and `serverless-webpack` to generate a bundled/minified `index.js` file which decreases the cold start latency.

## [Winston Logging](https://github.com/winstonjs/winston)

See [this article](https://medium.com/swlh/setting-up-elk-logger-and-alert-system-in-node-js-cd73f51548e6) for a general stack description.

### Testing Logging Locally
See the `elk-tool` directory to setup a local ELK stack for local logging (`.env.development.local` is pointing to this).

## Running Locally
`npm start`

`GET` on `http://localhost:3000`

## Tests
`npm test`

## Linting
`npm run pretest`

## Code Coverage
`npm run coverage`

Startup `Live Server` and navigate to `.coverage/lcov-report/index.html`.
