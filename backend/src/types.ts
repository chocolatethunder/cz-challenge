export interface Product {
  id: string;
  name: string;
}

export interface Package {
  id: string;
  packageName: string;
  contents: Array<string>;
  price: number;
}

export interface PackageData extends Omit<Package, 'contents'> {
  contents: Array<Product>;
}

export interface Order {
  id: string;
  total: number;
  orderDate: string;
  shippingAddress: string;
  customerName: string;
  customerEmail: string;
  lineItems: Array<string>;
}

export interface OrderData extends Omit<Order, 'lineItems'> {
  lineItems: Array<PackageData>;
}

export interface PickItem {
  productName: string;
  totalItems: number;
}
