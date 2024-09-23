import { Order, OrderData } from '../types';
import generatePackageData from './generatePackageData';

/*
 * This takes a list of Order objects, generates a list of detailed information about the
 * line items (packages) and then sums the total and returns a list of OrderData that
 * has more information about the object.
 */
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
