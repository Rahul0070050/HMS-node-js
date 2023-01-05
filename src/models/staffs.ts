import mongoose from 'mongoose'
import { Staff } from '../types/staff'

const staffSchema = new mongoose.Schema<Staff>({
    username: { type: String },
    age: { type: Number },
    emailId: { type: String },
    phone: { type: Number },
    salary: { type: Number },
    position: { type: String },
    address: [
        {
            name: { type: String },
            houseName: { type: String },
            city: { type: String },
            State: { type: String },
            pin: { type: Number },
        }
    ]
}, {
    timestamps: { createdAt: true }
})

export const Staffs = mongoose.model<Staff>('staffs', staffSchema)