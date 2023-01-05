import { Request, Response } from "express"
import { Doctors } from "../models/docters"
import { createDoctorToken } from "../utils"
import { doctorLoginFun } from "../services/doctorService"

export const doctorLogin = async(req: Request, res: Response) => {
    doctorLoginFun(req.body).then((result) => {
        res.status(200).json(result)
    }).catch(err => {
        res.status(406).json(err)
    })
}