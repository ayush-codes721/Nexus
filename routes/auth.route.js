import { Router } from "express";
import { login, registerUser } from "../controller/auth.controller.js";


const authRoutes = Router();

authRoutes.post('/register',registerUser)
authRoutes.post('/login',login)



// authRoutes.post('/test-fill')


export default authRoutes;

