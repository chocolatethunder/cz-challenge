import { Product } from '../types';

const generateProductItemCounts = (products: Array<Product>) => {
  const prodItemCount = products.reduce((acc, product) => {
    if (acc.get(product.id)) {
      acc.set(product.id, (acc.get(product.id) ?? 0) + 1);
    } else {
      acc.set(product.id, 1);
    }
    return acc;
  }, new Map<string, number>());

  return products
    .map((product) => {
      return {
        ...product,
        itemCount: prodItemCount.get(product.id) ?? 0,
      };
    })
    .filter((value, index, self) => {
      return index === self.findIndex((product) => product.id === value.id);
    });
};

export default generateProductItemCounts;
