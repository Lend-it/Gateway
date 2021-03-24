import express from 'express';
import Request from './app/microservices/Request.js';
import User from './app/microservices/User.js';

const routes = new express.Router();

routes.post('/users/create-user', User.createUser);
routes.post('/request/create-request', Request.createRequest);

export default routes;
