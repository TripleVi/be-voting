import * as service from '#src/services/stats-service.js'

const fetchLeaderBoard = async (req, res) => {
    const result = await service.getLeaderBoard()
    res.send(result)
}

const fetchReports = async (req, res) => {
    const result = await service.getReports()
    res.send(result)
}

export { fetchLeaderBoard, fetchReports }
