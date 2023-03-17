import {Router} from 'express'
import { createGroup, getGroups } from '../controllers/group.controller';

const router = Router();

router.post('/create', createGroup)
router.get('/', getGroups)

export default router;