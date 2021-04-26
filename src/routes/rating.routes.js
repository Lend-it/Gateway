import { Router } from 'express';
import Rating from '../microservices/Rating.js';

const ratingRouter = Router();

ratingRouter.post('/rating', Rating.createRating);

export default ratingRouter;
