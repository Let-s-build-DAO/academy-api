import { Router } from 'express';

import tokenRoutes from './token.routes';

const routes = Router();

routes.use('/token', tokenRoutes)

export default routes;