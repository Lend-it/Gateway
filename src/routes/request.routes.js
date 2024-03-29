import { Router } from 'express';

import Request from '../microservices/Request.js';

const requestRouter = Router();

requestRouter.get('/request', Request.getRequest);
requestRouter.get(
  '/request/available/:categoryId',
  Request.getFilteredByCategoryRequest
);
requestRouter.post('/request', Request.createRequest);
requestRouter.put('/request/:id', Request.updateRequest);
requestRouter.delete('/request/:id', Request.deleteRequest);

requestRouter.patch('/request/:id', Request.updateLender);
requestRouter.patch('/request/:id/finalize', Request.finalizeRequest);

requestRouter.get('/product-category', Request.getProductCategory);
requestRouter.post('/product-category', Request.createProductCategory);

export default requestRouter;
