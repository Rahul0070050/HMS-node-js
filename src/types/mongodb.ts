import mongoose from "mongoose";

export type connectionCallBack = (err?: mongoose.CallbackError) => void

export type userSchema = {
    username: String,
    email: String,
    age: Number,
    DOB: Date,
    gender: String,
    phone: Number,
    department: String,
    address: String,
    PIN: Number
}

export type tokenType = {
    email: String,
    firstName: String,
    tokenNumber: String,
    exp: String
}