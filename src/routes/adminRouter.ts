import express, { Router, Request, Response } from 'express'
import { registerCard } from '../controllers/userControllers'

const router: Router = Router()

router.get('/reister-card', registerCard)

export default router