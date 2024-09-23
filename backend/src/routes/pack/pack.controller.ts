import express from 'express';
import generateOrderData from '../../utils/generateOrderData';
import { orderList } from '../../data/model';

const packController = (
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) => {
  const orderData = generateOrderData(orderList);
  return res.status(200).json(orderData);
};

export default packController;
