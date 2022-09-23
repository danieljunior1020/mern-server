import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRouter from './routes/auth.js'
import placeRouter from './routes/place.js'
import userRouter from './routes/user.js'
import roomateRouter from './routes/roomate.js'
import cookieParser from 'cookie-parser'

// create port
const app = express()

dotenv.config()

const conn = async () => {
    try {
    
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('connect to db')
    
    } catch (error) {
        throw error
    }
}

// middlawares answers
app.use(cookieParser())
app.use(express.json())

app.use('/auth', authRouter)
app.use('/place', placeRouter)
app.use('/user', userRouter)
app.use('/roomate', roomateRouter)


app.listen(4000, () => {
    conn()
    console.log('server is run at port:', 4000)
})

