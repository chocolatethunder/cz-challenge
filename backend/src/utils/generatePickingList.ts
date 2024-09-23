import { OrderData, PickItem, Product } from '../types';

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
