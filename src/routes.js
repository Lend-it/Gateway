import express from 'express';
import Request from './app/microservices/Request.js';
import User from './app/microservices/User.js';

const routes = new express.Router();

routes.post('/users/user', User.createUser);
routes.post('/users/session', User.createSession);

routes.get('/requests/product-category', Request.getProductCategory);
routes.post('/requests/product-category', Request.createProductCategory);
routes.get('/requests/request', Request.getRequest);
routes.post('/requests/request', Request.createRequest);

export default routes;
