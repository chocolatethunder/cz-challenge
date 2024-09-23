import { Package, PackageData, Product } from '../types';
import { packageList, productList } from '../data/model';

const buildPackageData = (packageList: Array<Package>): Array<PackageData> => {
  return packageList.map((packageProd: Package) => {
    const products: Array<Product> = productList.filter((product: Product) => {
      return packageProd.contents.includes(product.id);
    });
    return {
      ...packageProd,
      contents: products,
    };
  });
};

const generatePackageData = (packageIds: Array<String>): Array<PackageData> => {
  const data: Array<Package> = packageList.filter((packageProd: Package) => {
    return packageIds.includes(packageProd.id);
  });
  return buildPackageData(data);
};

export default generatePackageData;
