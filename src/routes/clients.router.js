import { Router } from "express";

import {getClients} from '../controllers/clients.controller'
import { loginSet } from "../controllers/login.controller";

const router = Router()

router.get('/clients', getClients)
router.post('/login-clients', loginSet)

export default router