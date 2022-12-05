import mongoos, { Mongoose } from 'mongoose'
import { connectionCallBack } from '../types/mongodb'


export const connection = (done: connectionCallBack):void => {
    let db: mongoos.Connection 
    mongoos.connect('mongodb+srv://rahul:3LXVRRtn6OG11sLZ@cluster0.v8rii0g.mongodb.net/?retryWrites=true&w=majority',(err => {
        if(!err) {
            db = mongoos.connection
            db.on('error',(err) => {
                if(err) return done(err)
                else return done()
            })
        }

        done(err)
    }))
}

