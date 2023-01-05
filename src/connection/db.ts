import mongoos, { ConnectOptions, Mongoose } from 'mongoose'
import { connectionCallBack } from '../types/mongodb'

import dotnv from 'dotenv'
import path from 'path'

const env = path.join(__dirname, '../.env')
dotnv.config({ path: env })

export const connection = (done: connectionCallBack): void => {
    const options = {useNewUrlParser: true}

    let db: mongoos.Connection
    
    try {
        
        mongoos.connect(`${process.env.MONGO_URI}`, options as ConnectOptions, (err => {
            if (!err) {
                db = mongoos.connection

                db = db.useDb('users')

                db.on('error', (err) => {
                    if (err) return done(err)
                    else return done()
                })
            }

            done(err)
        }))
    } catch (error) {
        console.log(error);
        if (!process.env.MONGO_URI) {
            console.log('please provide mongodb connection string: MONGO_URI');
        }
    }
}

