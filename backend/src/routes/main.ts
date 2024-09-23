import { Router } from 'express';
import pickController from './pick/pick.controller';
import packController from './pack/pack.controller';

const mainRouter = Router();

mainRouter.get('/pick', pickController);
mainRouter.get('/pack', packController);

export default mainRouter;
