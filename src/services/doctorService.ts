import { verify } from 'password-hash'
import { Doctors } from "../models/docters"
import { Doctor } from "../types/staff"
import { createDoctorToken } from '../utils'

type DoctorInfo = {
    username: String,
    password: String
}
export const doctorLoginFun = (doctorInfo: DoctorInfo) => {
    return new Promise(async (resolve, reject) => {
        const doctor = (await Doctors.findOne({ username: doctorInfo.username })) as Doctor | null
        if (doctor) {
            if (verify(`${doctorInfo.password}`, `${doctor.password}`)) {
                const token = await createDoctorToken(doctorInfo)
                resolve({ ok: true, msg: 'doctor logedin', token })
            } else {
                reject({ ok: false, msg: 'invalid credentials' })
            }
        } else {
            reject({ ok: false, msg: 'invalid credentials' })
        }
    })
}