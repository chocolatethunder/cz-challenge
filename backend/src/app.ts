import express from 'express';
import cors from 'cors';
import mainRouter from './routes/main';

const app = express();

app.use(cors());

app.use(mainRouter);

export default app;
