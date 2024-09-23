import { Package, PackageData, Product } from '../types';
import { packageList, productList } from '../data/model';
import generateProductItemCounts from './generateProductItemCounts';

/*
 * This takes a list of Package objects and joins the list of all the content product ids to the
 * list of products to get their information added to the OrderData object.
 */
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

/*
 * This takes a list of ids that identify each package and generates a fully populated object
 * of Package type that contains a list of all the contentsIds (Products) which it passes to
 * buildPackageData to build the object further.
 */
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
