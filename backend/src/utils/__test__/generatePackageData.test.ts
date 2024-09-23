import generatePackageData from '../generatePackageData';

describe('generatePackageData', () => {
  it('package list with unique package ids', () => {
    const packageList = [
      '22f4e926-21ee-4f89-a8ee-25d8e88ca83b',
      '521e56d5-6567-4756-830b-a4006abba092',
    ];

    const expected = [
      {
        id: '22f4e926-21ee-4f89-a8ee-25d8e88ca83b',
        packageName: 'Valentines Box',
        price: 299.99,
        contents: [
          {
            id: 'f80e6ce9-675a-4d5a-9d17-7212d01f1720',
            itemCount: 1,
            name: 'Red Roses Bouquet',
          },
          {
            id: '76d65ad2-a623-4131-86ab-b9559cd0c6c6',
            itemCount: 1,
            name: 'Box of chocolates',
          },
          {
            id: 'be87472b-4908-4a7d-8aaa-401ffda30f67',
            itemCount: 1,
            name: 'Love card',
          },
          {
            id: 'c1ac7231-adbd-40a8-b885-e76c7d75ff30',
            itemCount: 1,
            name: "Women's perfume",
          },
        ],
      },
      {
        id: '521e56d5-6567-4756-830b-a4006abba092',
        packageName: 'Birthday Box',
        price: 149.99,
        contents: [
          {
            id: 'cb4a7077-6893-4c26-a7be-444c0b9dc0a8',
            itemCount: 1,
            name: 'Birthday cupcake',
          },
          {
            id: 'c51f23ec-ae51-481f-8db1-d52e875a9d89',
            itemCount: 1,
            name: '$100 Visa Gift Card',
          },
          {
            id: 'd37646f3-1712-4c9b-a879-31fc6eb72d8c',
            itemCount: 1,
            name: 'Birthday card',
          },
        ],
      },
    ];

    expect(generatePackageData(packageList)).toEqual(expected);
  });

  it('package list with duplicate package ids', () => {
    const packageList = [
      '22f4e926-21ee-4f89-a8ee-25d8e88ca83b',
      '22f4e926-21ee-4f89-a8ee-25d8e88ca83b',
    ];

    const expected = [
      {
        id: '22f4e926-21ee-4f89-a8ee-25d8e88ca83b',
        packageName: 'Valentines Box',
        price: 299.99,
        contents: [
          {
            id: 'f80e6ce9-675a-4d5a-9d17-7212d01f1720',
            itemCount: 1,
            name: 'Red Roses Bouquet',
          },
          {
            id: '76d65ad2-a623-4131-86ab-b9559cd0c6c6',
            itemCount: 1,
            name: 'Box of chocolates',
          },
          {
            id: 'be87472b-4908-4a7d-8aaa-401ffda30f67',
            itemCount: 1,
            name: 'Love card',
          },
          {
            id: 'c1ac7231-adbd-40a8-b885-e76c7d75ff30',
            itemCount: 1,
            name: "Women's perfume",
          },
        ],
      },
      {
        id: '22f4e926-21ee-4f89-a8ee-25d8e88ca83b',
        packageName: 'Valentines Box',
        price: 299.99,
        contents: [
          {
            id: 'f80e6ce9-675a-4d5a-9d17-7212d01f1720',
            itemCount: 1,
            name: 'Red Roses Bouquet',
          },
          {
            id: '76d65ad2-a623-4131-86ab-b9559cd0c6c6',
            itemCount: 1,
            name: 'Box of chocolates',
          },
          {
            id: 'be87472b-4908-4a7d-8aaa-401ffda30f67',
            itemCount: 1,
            name: 'Love card',
          },
          {
            id: 'c1ac7231-adbd-40a8-b885-e76c7d75ff30',
            itemCount: 1,
            name: "Women's perfume",
          },
        ],
      },
    ];

    expect(generatePackageData(packageList)).toEqual(expected);
  });

  it('package id containing duplicate products', () => {
    const packageList = ['b6dfeead-7e02-4abe-9c6a-df9873bcb295'];

    const expected = [
      {
        contents: [
          {
            id: '9a151b6d-ac35-4635-97be-2b2703b836cf',
            itemCount: 2,
            name: 'Bottle of wine',
          },
          {
            id: '7ca2921f-ee9e-43d0-8186-d3a231dee154',
            itemCount: 1,
            name: 'Fruit basket',
          },
          {
            id: '09847171-5da2-40b1-9853-a3b12a586188',
            itemCount: 2,
            name: 'Pen',
          },
        ],
        id: 'b6dfeead-7e02-4abe-9c6a-df9873bcb295',
        packageName: 'Box of Dupes',
        price: 499.99,
      },
    ];

    expect(generatePackageData(packageList)).toEqual(expected);
  });

  it('no package id returns empty', () => {
    expect(generatePackageData([])).toEqual([]);
  });
});
