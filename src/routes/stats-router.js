import { Router } from 'express'

import * as ctrl from '#src/controllers/stats-controller.js'

const router = Router()

router.get('/', ctrl.fetchLeaderBoard)
router.get('/reports', ctrl.fetchReports)

export default router