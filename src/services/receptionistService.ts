import { verify } from 'password-hash'
import { Doctors } from "../models/docters"
import { Staff } from "../types/staff"
import { createReceptionistToken } from '../utils'

type receptionistInfo = {
    username: String,
    password: String
}
export const receptionistloginFun = (ReceptionistInfo: receptionistInfo) => {
    return new Promise(async (resolve, reject) => {
        const receptionist = (await Doctors.findOne({ username: ReceptionistInfo.username })) as Staff | null
        if (receptionist) {
            if (verify(`${ReceptionistInfo.password}`, `${ReceptionistInfo.password}`)) {
                const token = await createReceptionistToken(ReceptionistInfo)
                resolve({ ok: true, msg: 'receptionist logedin' })
            } else {
                reject({ ok: false, msg: 'invalid credentials' })
            }
        } else {
            reject({ ok: false, msg: 'invalid credentials' })
        }
    })
}