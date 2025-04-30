import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import initRoutes from './routes/index.js'

const app = express()

app.use(cors({
    origin: ['http://localhost:5173', 'https://rosiecheeks.onrender.com'],
    optionsSuccessStatus: 200,
    // credentials: true,
}))

initRoutes(app)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running at port ${port}.`)
})
