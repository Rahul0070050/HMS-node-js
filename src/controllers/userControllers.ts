import { Request, Response } from "express";
import { cunfirmOrder, razorpayCreatePayment } from "../helpers/userHelpers";

export const registerCard = (req: Request, res: Response):void => {
    razorpayCreatePayment().then(data => {
        console.log(data);
        
        res.status(200).json(data)
    })
}

export const saveRegistrationCard = (req: Request, res: Response): void => {
    cunfirmOrder(req.body).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
        
    })
}