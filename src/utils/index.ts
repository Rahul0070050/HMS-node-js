import jwt from 'jsonwebtoken'
import { createTransport } from 'nodemailer'
import { Token } from "../models/tokenModel";

export function generateTokenNumber() {
    return new Promise((resolve, reject) => {

        let tokennumber: String = '0000000000'

        Token.count({}).then(val => {
            tokennumber += String(++val)
            let token = tokennumber.slice(String(val).length, tokennumber.length)
            resolve(token)
        }).catch(err => {
            console.log(err);
            console.log(err.message);

        })
    })
}

// create token
export async function createAdminToken(payload: Object) {
    const val = await jwt.sign(payload, `${process.env.ADMIN_JWT}`)
    return val
}

export const createDoctorToken = async (payload: Object) => {
    const val = await jwt.sign(payload, `${process.env.DOCTOR_JWT}`)
    return val
}

export const createReceptionistToken = async (payload: Object) => {
    const val = await jwt.sign(payload, `${process.env.RECEPTIONIST_JWT}`)
    return val
}

// verity token
export async function verifyAdminToken(token: String) {
    const val = await jwt.verify(`${token}`, `${process.env.ADMIN_JWT}`)
    return val
}
export async function verifyDoctorToken(token: String) {
    const val = await jwt.verify(`${token}`, `${process.env.ADMIN_JWT}`)
    return val
}
export async function verifyReceptionistToken(token: String) {
    const val = await jwt.verify(`${token}`, `${process.env.ADMIN_JWT}`)
    return val
}

export function sentGmailToDoctor(email: String, username: String, password: String) {
    return new Promise((resolve, reject) => {

        const newLocal = 'hmsservic0010010@gmail.com';
        const transporter = createTransport({
            service: 'gmail',
            auth: {
                user: "hmsservic0010010@gmail.com",
                pass: `${process.env.EMAIL_PASS}`
            }
        })
        const options = {
            from: 'hmsservic0010010@gmail.com',
            to: `${email}`,
            subject: 'Your Username and Password',
            text: `username: ${username}, \n password: ${password}`
        }
        try {
            transporter.sendMail(options, (err, data) => {
                if (err) {
                    console.log(err.message);
                    reject(err.message)
                } else {
                    console.log(data.response);
                    resolve(data.response)
                }
            })
        } catch (error) {
            throw new Error((error as ErrorEvent).message)
        }
    })
}