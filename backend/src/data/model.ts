import orders from './orders.json';
import packages from './packages.json';
import products from './products.json';

const orderList = JSON.parse(JSON.stringify(orders)).orders;
const packageList = JSON.parse(JSON.stringify(packages)).packages;
const productList = JSON.parse(JSON.stringify(products)).products;

export { orderList, packageList, productList };
