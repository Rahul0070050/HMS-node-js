import { Token } from "../models/tokenModel";
import { userDate } from "../types/payment";
import { generateTokenNumber } from "../utils";


export const registerPatient = (userData: userDate) => {
    return new Promise(async (resolve, reject) => {
        try {


            // const email = await Token.findOne({ "email": userData.email })
            // if (email) {
            //     console.log('email');
            //     reject({ ok: false, msg: 'this user is already exists' })
            // }
            generateTokenNumber().then(num => {
                const date = new Date(new Date());
                const new_token = new Token({
                    fullName: userData.firstName + ' ' + userData.lastName,
                    email: userData.email,
                    tokenNumber: num,
                    exp: new Date(date.setMonth(date.getMonth() + 4)).toLocaleDateString()
                })

                new_token.save((err, result) => {
                    if (!err) {
                        resolve({ ok: true,result })
                    }else {
                        console.log(err);
                        
                    }
                })
            })
        } catch (error) {
            reject({ ok: false, msg: (error as Error).message })
        }
    })
}

export const getUserCoupon = () => {
    return new Promise((resolve, reject) => {
        try {

        } catch (error) {
            reject({ ok: false, msg: (error as Error).message })
        }
    })
}