import express from 'express'

import { getMembers, createMember, deleteMember } from '../controllers/members.js'

const router = express.Router()

router.get('/', getMembers)
router.post('/', createMember)
router.delete('/:id', deleteMember)

export default router