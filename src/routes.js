import express from 'express';
import Request from './app/microservices/Request.js';
import User from './app/microservices/User.js';

const routes = new express.Router();

routes.post('/users/create-user', User.createUser);
routes.post('/users/create-session', User.createSession);

routes.post('/requests/create-request', Request.createRequest);
routes.get('/requests/product-category', Request.getProductCategory);

export default routes;
