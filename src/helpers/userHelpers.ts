import razorpay from 'razorpay'
import crypto from 'crypto'

import { userDate, orderInfo, paymentInfo } from '../types/payment'
import { registerPatient } from '../services/userServices'
const instance = new razorpay({ key_id: 'rzp_test_oSkqcdZLf0wgQE', key_secret: 'RJjz8rmLCp6Aq6YB6ojTucGt' })
export const razorpayCreatePayment = () => {
    return new Promise((resolve, rejects) => {

        instance.orders.create({
            amount: 140 * 100,
            currency: "INR",
            receipt: new Date(),
        }, (err: Error, data: any) => {
            resolve(data)
        })
    })
}
export const cunfirmOrder = (info: { order: orderInfo, payment: paymentInfo, user: userDate }) => {
    const { order, payment, user } = info

    if (user?.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) && user.firstName.match(/^[a-zA-Z]+$/) && user.lastName.match(/^[a-zA-Z]+$/)) {
        
        return new Promise((resolve, reject) => {
            let hmac: any = crypto.createHmac('sha256', 'RJjz8rmLCp6Aq6YB6ojTucGt')
            hmac.update(payment.razorpay_order_id + '|' + payment.razorpay_payment_id)
            hmac = hmac.digest('hex')

            if (hmac == payment.razorpay_signature) {
                registerPatient(user).then(result => {
                    resolve({ ok: true })
                })
            } else {
                reject({ ok: false })
            }

        })

    }
}