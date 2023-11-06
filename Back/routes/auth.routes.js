import { Router } from "express";
import { login, register, logout, profile, verifyToken } from '../controller/auth.controller.js'
import { authRequired } from "../middlewares/";
import { validateSchema } from '../middlewares/validator.middleware.js'
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
const validateToken = require('./middlewares/validateToken');


const router = Router()

router.post('/register', validateSchema(registerSchema), register)

router.post('/login', validateSchema(loginSchema), login)

router.post('/logout', logout)

//routes protegidas

router.get('/verify', verifyToken)

router.get('/profile', authRequired, profile)

export default router