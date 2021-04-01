import { Router } from 'express';

import Request from '../microservices/Request.js';

const requestRouter = Router();

requestRouter.get('/request', Request.getRequest);
requestRouter.post('/request', Request.createRequest);

requestRouter.get('/product-category', Request.getProductCategory);
requestRouter.post('/product-category', Request.createProductCategory);

export default requestRouter;
