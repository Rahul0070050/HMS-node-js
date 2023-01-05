import mongoose from 'mongoose'
import { tokenType } from '../types/mongodb'

const tokenModel : mongoose.Schema = new mongoose.Schema<tokenType>({
    email: { type: String },
    tokenNumber: {type: String},
    firstName: {type: String},
    exp: {type:String}
})

export const Token = mongoose.model<tokenType>('tokens', tokenModel)