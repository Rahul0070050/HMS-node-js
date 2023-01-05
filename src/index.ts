import expres, { Express } from 'express'
import cors from 'cors'
import {connection} from './connection/db'

import 'dotenv/config'

import userRouter from './routes/userRouter'
import adminRouter from './routes/adminRouter'
import doctorRouter from './routes/docterRouter'

const app: Express = expres()

app.use(expres.json())


app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))

app.use(expres.urlencoded({ extended: true }))

// db connection
connection((err) => {
    if(err) throw new Error(err.message)
    else console.log('db connected successfully');
    
})

app.use('/admin', adminRouter)
app.use('/user', userRouter)
app.use('/doctor', doctorRouter)
app.use('/receptionist', doctorRouter)

const PORT = 3001


app.listen(PORT, async() => {
    console.log(`port running on PORT: ${PORT}`);
})