import { Request, Response } from "express";
import { cunfirmOrder, razorpayCreatePayment } from "../helpers/userHelpers";
import { getUserCoupon } from "../services/userServices";

export const registerCard = (req: Request, res: Response): void => {
    razorpayCreatePayment().then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(500).json(err)
    })
}

export const saveRegistrationCard = (req: Request, res: Response): void => {
    if (req.body.payment && req.body.userData) {
        cunfirmOrder(req.body).then(result => {
            res.status(200).json(result)
            
        }).catch(err => {
            console.log(err);
            
            if (err?.serverErr) {
                res.status(500).json(err)
            } else return res.status(502).json(err)
        })
    }
}