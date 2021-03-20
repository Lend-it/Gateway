import express from 'express';
import User from './app/microservices/User.js';

const routes = new express.Router();

routes.post('/oi', User.createUser);

export default routes;
