import expres, { Express } from 'express'
import cors from 'cors'
import {connection} from './connection/db'

import 'dotenv/config'

import userRouter from './routes/userRouter'
import adminRouter from './routes/adminRouter'

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

app.use('/user', userRouter)
app.use('/admin', adminRouter)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`port running oi PORT ${PORT}`);

})