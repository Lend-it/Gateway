import express from 'express';
import 'express-async-errors';
import Youch from 'youch';
import Sentry from '@sentry/node';

import routes from './routes.js';

class App {
  constructor() {
    Sentry.init({ dsn: process.env.SENTRY_DSN });

    this.server = express();
    this.node_env = process.env.NODE_ENV || 'development';

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.catchErrorsSentry();
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    this.catchErrorsSentry();
  }

  catchErrorsSentry() {
    if (!['prod', 'homolog'].includes(this.node_env)) return;

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
