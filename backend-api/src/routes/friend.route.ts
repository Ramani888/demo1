import {Router} from 'express';
import { createFreind, deleteFriend, getFriends } from '../controllers/friend.controller';

const router = Router();

router.post('/create', createFreind)
router.get('/', getFriends)
router.delete('/', deleteFriend)

export default router;
