import express from 'express';
import cors from 'cors';
import mainRouter from './routes/main';

const app = express();

app.use(cors());

app.use('/order', mainRouter);

app.get('/', (_req, res) => {
  return res.status(200).send('Welcome to the ordering system!');
});

app.get('*', (req, res) => {
  return res.status(404).send('Not Found');
});

export default app;
