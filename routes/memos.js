import express from 'express'

import {getMemos, createMemo, deleteMemo} from '../controllers/memos.js'

const router = express.Router()

router.get('/', getMemos)
router.post('/', createMemo)
router.delete('/:id', deleteMemo)

export default router