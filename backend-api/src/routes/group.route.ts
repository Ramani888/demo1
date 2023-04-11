import {Router} from 'express'
import { createGroup, deleteGroupAndGroupDetail, getGroupAndGroupDetails, getGroups, insertGroupAndGroupDetails, updateGroup } from '../controllers/group.controller';

const router = Router();

router.post('/create', createGroup)
router.get('/', getGroups)
router.get('/groupDetails', getGroupAndGroupDetails)
router.post('/groupDetails', insertGroupAndGroupDetails)
router.delete('/', deleteGroupAndGroupDetail)
router.put('/', updateGroup)

export default router;