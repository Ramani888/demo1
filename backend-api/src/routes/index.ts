import express from 'express';
import userRouter from './user.route';


const router = express.Router();

router.use('/api/d1/users', userRouter);

export default router;