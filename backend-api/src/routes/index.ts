import express from 'express';
import userRouter from './user.route';
import friendRouter from './friend.route';


const router = express.Router();

router.use('/api/d1/users', userRouter);
router.use('/api/d1/friends', friendRouter);

export default router;