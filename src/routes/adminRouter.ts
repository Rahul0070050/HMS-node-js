import { Router } from 'express'
import { adminlogin, createDoctor, getAllDoctors } from '../controllers/adminController'
import { authorisation } from '../middlewares/adminMiddleware'

const router = Router()

router.post('/login', adminlogin)
router.post('/crete/doctor', authorisation, createDoctor)
// router.all('*',authorisation)
router.get('/get/all/doctors',authorisation, getAllDoctors)

export default router