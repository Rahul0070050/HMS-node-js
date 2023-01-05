import express from 'express'
import { doctorLogin } from '../controllers/doctorController'

const router = express.Router()

router.post('/login',doctorLogin)

export default router