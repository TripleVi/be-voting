import cron from 'node-cron'

import { updateReportsHourly } from '#src/services/stats-service.js'

const scheduleOptions = {
    scheduled: true,
    timezone: 'UTC',
}

const scheduleTasks = () => {
    cron.schedule('0 * * * *', () => {
        updateReportsHourly(new Date())
    }, scheduleOptions)
}

export default scheduleTasks
