import { Router } from 'express';

import TokenController from '../controller/TokenController';
import TransferValidator from "../validators/TokenTransfer"

const tokenController = new TokenController()
const tokenRoutes = Router();

tokenRoutes.post('/transfer', TransferValidator, tokenController.transfer)

export default tokenRoutes;