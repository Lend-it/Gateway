import express from 'express';
import 'express-async-errors';
import Youch from 'youch';
import Sentry from '@sentry/node';

import routes from './routes.js';

class App {
  constructor() {
    this.server = express();
    this.node_env = process.env.NODE_ENV || 'development';

    Sentry.init({
      dsn:
        'https://ac855a133b59484eae32ac5ce34a814c@o336427.ingest.sentry.io/5685201',
    });

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.errorHandler());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (this.node_env === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error :/' });
    });
  }
}

export default new App().server;
