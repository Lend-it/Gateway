import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload.js';

import User from '../microservices/User.js';

const userRouter = Router();
const upload = multer(uploadConfig.upload('./tmp'));

userRouter.post('/user', User.createUser);
userRouter.post('/session', User.createSession);
userRouter.put('/user', User.updateUser);
userRouter.patch('/user/avatar', upload.single('avatar'), User.updateAvatar);
userRouter.patch('/user/location', User.updateLocation);
userRouter.get('/user/requests/:useremail', User.getUserRequests);

export default userRouter;
