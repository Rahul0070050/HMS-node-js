import mongoose from "mongoose";

export type connectionCallBack = (err?: mongoose.CallbackError) => void 

export type userSchema = {
    username: String
}