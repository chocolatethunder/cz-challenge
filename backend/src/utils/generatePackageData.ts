import { Package, PackageData, Product } from '../types';
import { packageList, productList } from '../data/model';

const buildPackageData = (packageList: Array<Package>): Array<PackageData> => {
  return packageList.map((packageProd: Package) => {
    const products: Array<Product> = packageProd.contents.map(
      (productId: string) => {
        return productList.find((product: Product) => product.id === productId);
      }
    );

    const prodItemCount = products.reduce((acc, product) => {
      if (acc.get(product.id)) {
        acc.set(product.id, (acc.get(product.id) ?? 0) + 1);
      } else {
        acc.set(product.id, 1);
      }
      return acc;
    }, new Map<string, number>());

    const updatedProductList = products
      .map((product) => {
        return {
          ...product,
          itemCount: prodItemCount.get(product.id) ?? 0,
        };
      })
      .filter((value, index, self) => {
        return index === self.findIndex((product) => product.id === value.id);
      });

    return {
      ...packageProd,
      contents: updatedProductList,
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
