import express, { Router, Request, Response } from 'express'

import { registerCard, saveRegistrationCard } from '../controllers/userControllers'

const router: Router = Router()

router.get('/register-card', registerCard)
router.post('/register-card', saveRegistrationCard)

export default router