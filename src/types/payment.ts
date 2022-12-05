
export interface paymentInfo {
    razorpay_payment_id: String,
    razorpay_order_id: String,
    razorpay_signature: String
}
export interface orderInfo {
    id: String,
    receipt: String
}
export interface userDate {
    firstName: String,
    lastName: String,
    email: String
}