import axios from 'axios'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js'
import timezone from 'dayjs/plugin/timezone.js'

import db from '#src/models/index.cjs'

dayjs.extend(utc)
dayjs.extend(timezone)

const getLeaderBoard = async () => {
    const url = process.env.URL
    const response = await axios.get(url, {
        headers: {
            'x-prizm-channel': process.env.CHANNEL,
            'x-prizm-device-id': process.env.DEVICEID,
            'x-prizm-language': 'en',
        }
    })
    const data = response.data.componentList.find(e => e.voteList[0]?.id === 101)
    const females = data.voteList[0].nomineeList
    females.sort((a, b) => b.voteCount - a.voteCount)
    return females.slice(0, 3).map(({ id, name, voteCount: votes}) => ({ id, name, votes }))
}

// const convertDateByTimezone = (date) => {
//     return dayjs(date).tz('Asia/Bangkok').format('YYYY-MM-DDTHH:mm:ss.SSSZ')
// }

const getReports = async () => {
    const reports = await db.HourlyReport.findAll({
        attributes: ['votes', 'userId', 'createdAt'],
        order: [['createdAt'], ['userId']],
    })
    const result = {}
    reports.forEach(item => {
        const { createdAt, votes, userId } = item.get()
        const date = dayjs(createdAt).tz('Asia/Bangkok')
        const txtDate = date.format('YYYY-MM-DD')
        if (!result[txtDate]) {
            result[txtDate] = {}
        }
        if (!result[txtDate][date.hour()]) {
            result[txtDate][date.hour()] = {}
        }
        result[txtDate][date.hour()][userId] = votes
    })
    return result
}

export { getLeaderBoard, getReports }
