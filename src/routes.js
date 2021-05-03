import { Router } from 'express';

import userRouter from './routes/user.routes.js';
import requestRouter from './routes/request.routes.js';
import ratingRouter from './routes/rating.routes.js';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/requests', requestRouter);
routes.use('/rating', ratingRouter);

export default routes;
