import { Router } from 'express';

import User from '../microservices/User.js';

const userRouter = Router();

userRouter.post('/user', User.createUser);
userRouter.post('/session', User.createSession);

export default userRouter;
