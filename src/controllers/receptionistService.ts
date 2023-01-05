import { Request, Response } from "express"
import { receptionistloginFun } from "../services/receptionistService"

export const receptionistlogin = async(req: Request, res: Response) => {
    receptionistloginFun(req.body).then((result) => {
        res.status(200).json(result)
    }).catch(err => {
        res.status(406).json(err)
    })
}