import {Router} from 'express';
import { createFreind, getFriends } from '../controllers/friend.controller';

const router = Router();

router.post('/create', createFreind)
router.get('/', getFriends)

export default router;
