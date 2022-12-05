import mongoose from "mongoose";
import { userDate } from "../types/payment";

const db: mongoose.Connection = mongoose.connection

export const registerPatient = (userData: userDate) => {
    return new Promise((resolve, reject) => {
        
    })
}