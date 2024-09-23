import { OrderData, PickItem, Product } from '../types';

/*
 * This takes a list of OrderData which contains all the information about each package in each
 * order and uses the itemCount to determine how many of the total items of each Product type
 * that need to be picked up off the shelf to be shipped out later.
 */
const generatePickingList = (orderList: OrderData[]): PickItem[] => {
  const itemsMap = new Map<string, number>();
  orderList.forEach((order) => {
    order.lineItems.forEach((lineItem) => {
      lineItem.contents.forEach((product: Product) => {
        if (itemsMap.get(product.name)) {
          itemsMap.set(product.name, (itemsMap.get(product.name) ?? 0) + 1);
        } else {
          itemsMap.set(product.name, 1);
        }
      });
    });
  });

  return Array.from(itemsMap, ([k, v]) => ({ productName: k, totalItems: v }));
};

export default generatePickingList;
