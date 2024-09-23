import { Router } from 'express';

const mainRouter = Router();

mainRouter.get('/', (_req, res) => {
  return res.status(200).send('Hello World!');
});

export default mainRouter;
