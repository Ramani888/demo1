import {Router} from 'express';
import { createLogin, createUser, getUsers } from '../controllers/user.controller';

const router = Router();

router.get('/', getUsers)
router.post('/create', createUser)
router.post('/login', createLogin)

export default router;