import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import memoRoutes from './routes/memos.js'

dotenv.config()
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.use('/memos', memoRoutes)

const PORT = process.env.PORT || 4500
const URL = process.env.DB_URL

mongoose.connect(URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(
    () => app.listen(PORT, () => console.log(`Server is live at http://localhost:${PORT}`))
)