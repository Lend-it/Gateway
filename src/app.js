import express from 'express';
import 'express-async-errors';
import Youch from 'youch';
import Sentry from '@sentry/node';

import routes from './routes.js';

class App {
  constructor() {
    this.server = express();
    this.node_env = process.env.NODE_ENV || 'development';

    Sentry.init({ dsn: this.isInDeploy() && process.env.SENTRY_DSN });

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

  isInDeploy() {
    return ['prod', 'homolog'].includes(this.node_env);
  }

  catchErrorsSentry() {
    if (!this.isInDeploy()) return;

    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, _) => {
      if (this.node_env === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error :/' });
    });
  }
}

export default new App().server;
