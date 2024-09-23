import { Package, PackageData, Product } from '../types';
import { packageList, productList } from '../data/model';
import generateProductItemCounts from './generateProductItemCounts';

const buildPackageData = (packageList: Array<Package>): Array<PackageData> => {
  return packageList.map((packageProd: Package) => {
    const products: Array<Product> = packageProd.contents.map(
      (productId: string) => {
        return productList.find((product: Product) => product.id === productId);
      }
    );

    return {
      ...packageProd,
      contents: generateProductItemCounts(products),
    };
  });
};

const generatePackageData = (packageIds: Array<String>): Array<PackageData> => {
  const packageListData: Array<Package> = packageIds
    .map((packageId) => {
      return packageList.filter((packageProd: Package) => {
        return packageProd.id === packageId;
      });
    })
    .flat();

  return buildPackageData(packageListData);
};

export default generatePackageData;
