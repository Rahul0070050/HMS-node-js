import { Request, Response } from "express"
import { Doctors } from "../models/docters"
import { create, getDoctors } from "../services/adminServices"
import { createAdminToken } from "../utils"

export const adminlogin = async(req: Request, res: Response) => {
    if (req.body.username === process.env.ADMIN_USERNAME && req.body.password === process.env.ADMIN_PASSWORD) {
        const token = await createAdminToken(req.body)
        res.status(200).json({ ok: true, msg: 'successfully logedin', token })
    } else {
        res.status(403).json({ok:false,msg: 'Invalid credentials'})
    }
}

export const createDoctor = (req: Request, res: Response) => {
    create(req.body).then(response => {
        res.status(200).json(response)
    }).catch(err => {
        res.status(403).json(err)
    })
}

export const getAllDoctors = (req: Request, res: Response) => {
    getDoctors().then(result => {
        res.status(200).json({ok:true,result})
    })

}