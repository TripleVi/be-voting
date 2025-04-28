import axios from 'axios'

import db from '#src/models/index.cjs'

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

const getReports = async () => {
    const data = await db.HourlyReport.findAll({
        attributes: ['votes', 'userId', 'createdAt'],
        order: [['createdAt'], ['userId']],
    })
    console.log(new Date())
    // const data = await db.Test.findAll()
    // console.log(data[0].get())
    // console.log(data[0].time.toString())
    // const result = [];

    // const map = {}; // Dùng để map theo hour

    // data.forEach(item => {
    // const { hour, ...video } = item;
    
    // if (!map[hour]) {
    //     map[hour] = { hour };
    //     result.push(map[hour]);
    // }

    // Object.assign(map[hour], video); // Thêm video vào object tương ứng
    // });

    // console.log(result);
    return data
}

const updateReportsHourly = async (createdAt) => {
    const data = await getLeaderBoard()
    const reports = data.map(({ id: userId, votes}) => ({
        votes,
        userId,
        createdAt,
    }))
    await db.HourlyReport.bulkCreate(reports)
}

export { getLeaderBoard, updateReportsHourly, getReports }
