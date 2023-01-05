import mongoose from "mongoose";
import { userSchema } from "../types/mongodb";

const userSchema: mongoose.Schema = new mongoose.Schema<userSchema>({
    username: { type: String },
    age: { type: Number },
    address: { type: String },
    email: { type: String },
    DOB: { type: Date },
    department: { type: String },
    gender: { type: String },
    phone: { type: Number },
    PIN: { type: Number },
})

export const User = mongoose.model<userSchema>('users', userSchema)