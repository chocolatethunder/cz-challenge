import { Order, OrderData } from '../types';
import generatePackageData from './generatePackageData';

const generateOrderData = (orderList: Array<Order>): Array<OrderData> => {
  return orderList.map((order) => {
    const lineItems = generatePackageData(order.lineItems);
    return {
      ...order,
      lineItems,
      total: lineItems.reduce((acc, item) => acc + item.price, 0),
    };
  });
};

export default generateOrderData;
