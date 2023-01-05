import razorpay from 'razorpay'
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import { userDate, paymentInfo } from '../types/payment'
import { registerPatient } from '../services/userServices'

const instance = new razorpay({ key_id: 'rzp_test_oSkqcdZLf0wgQE', key_secret: 'RJjz8rmLCp6Aq6YB6ojTucGt' })

export const razorpayCreatePayment = () => {
    return new Promise((resolve, reject) => {
        try {
            instance.orders.create({
                amount: 140 * 100,
                currency: "INR",
                receipt: new Date(),
            }, (err: Error, data: any) => {
                resolve(data)
            })
        } catch (error) {
            reject({ ok: false, msg: (error as Error).message })
        }
    })
}
export const cunfirmOrder = (info: { payment: paymentInfo, userData: userDate }): Promise<Object> => {

    return new Promise((resolve, reject) => {
        try {
            const { payment, userData } = info
            const { email, firstName, lastName } = userData;

            // this validation doesn't allow space char => ' '
            if (email?.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) && firstName?.match(/^[a-zA-Z]+$/) && lastName?.match(/^[a-zA-Z]+$/)) {

                let hmac: any = crypto.createHmac('sha256', 'RJjz8rmLCp6Aq6YB6ojTucGt')
                hmac.update(payment.razorpay_order_id + '|' + payment.razorpay_payment_id)
                hmac = hmac.digest('hex')

                if (hmac == payment.razorpay_signature) {
                    registerPatient(userData).then((result: any) => {
                        resolve(result)
                    }).catch((result) => {
                        reject(result)
                    })
                } else {
                    reject({ ok: false, msg: 'razorpay signature not matching' })
                }


            } else {
                reject({ ok: false, msg: 'some issue have in user data' })
            }
        } catch (error) {
            reject({ ok: false, msg: (error as Error).message, serverErr: true })

        }
    })


}

export const sendEmail = () => {
    return new Promise((resolve, reject) => {
        try {

        } catch (error) {
            reject({ ok: false, smg: (error as Error).message })
        }
    })
}