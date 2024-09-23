import express from 'express';
import { orderList } from '../../data/model';
import generateOrderData from '../../utils/generateOrderData';
import generatePickingList from '../../utils/generatePickingList';

const pickController = (
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) => {
  const orderData = generateOrderData(orderList);
  return res.status(200).json(generatePickingList(orderData));
};

export default pickController;
