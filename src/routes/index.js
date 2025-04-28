import statsRouter from './stats-router.js'

function initRoutes(app) {
    app.use('/api/v1/stats', statsRouter)

    app.get('', (_, res) => {
        res.status(200).send("<h1>Computer Store API</h1>")
    })
}

export default initRoutes
