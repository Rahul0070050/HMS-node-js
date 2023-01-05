import mongoose from 'mongoose'
import { Doctor, Staff } from '../types/staff'

const DocterSchema: mongoose.Schema = new mongoose.Schema<Doctor>({
    username: { type: String },
    age: { type: Number },
    JoindDate: { type: String ,default: new Date().toLocaleDateString() },
    emailId: { type: String },
    phone: { type: Number },
    salary: { type: Number },
    department: { type: String },
    position: { type: String },
    appointed: { type: Date },
    specializedIn: { type: String },
    EducationQualification: { type: [] },
    Languages: { type: [] },
    password: {type: String},
    address: [
        {
            name: { type: String },
            houseName: { type: String },
            city: { type: String },
            State: { type: String },
            pin: { type: Number },
        }
    ],
    workExperience: [
        {
            year: Number,
            text: String
        }
    ]
})

export const Doctors = mongoose.model<Doctor>('doctors', DocterSchema)