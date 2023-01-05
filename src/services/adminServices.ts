import { generate } from 'password-hash'
import { Doctor } from '../types/staff'
import { Doctors } from '../models/docters'
import { sentGmailToDoctor } from '../utils'

export const create = (doctorInfo: Doctor) => {
    return new Promise(async (resolve, reject) => {
        const item = await Doctors.findOne({ emailId: doctorInfo.emailId })
        if (item) {
            reject({ ok: false, msg: 'this email is already exist' })
        } else {
            sentGmailToDoctor(doctorInfo.emailId, doctorInfo.username, doctorInfo.password).then(result => {
                console.log('mail sended');
               const doctor = new Doctors({
                    username: doctorInfo.username,
                    emailId: doctorInfo.emailId,
                    password: generate(`${doctorInfo.password}`),
                    salary: doctorInfo.salary,
                    department: doctorInfo.department
                })
                doctor.save(res => {
                    console.log(doctor);
                    
                    resolve({ ok: true, doctor: doctor, msg: 'account successfully created' })
                })
            }).catch(err => {
                reject({ok:false,msg: 'invalid email'})

            })
        }
    })
}

export const getDoctors = () => {
    return new Promise((resolve, reject) => { 
        try {
            Doctors.find({}).then(res => {
                resolve(res)
            })
        } catch (error) {
            throw new Error((error as ErrorEvent).message)
        }
     })
}