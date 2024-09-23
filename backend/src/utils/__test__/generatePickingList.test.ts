import generatePickingList from '../generatePickingList';
import { PickItem } from '../../types';

describe('generatePickingList', () => {
  it('generates the proper list of items and values', () => {
    const order = [
      {
        id: 'ed1cf7f2-c368-4691-ba96-73a30b18b989',
        orderDate: 'September 15th, 2023',
        shippingAddress: '100 dundas Street east',
        customerName: 'John Smith',
        customerEmail: 'john.smith@mranderson.com',
        lineItems: [
          {
            id: '521e56d5-6567-4756-830b-a4006abba092',
            packageName: 'Birthday Box',
            contents: [
              {
                id: 'cb4a7077-6893-4c26-a7be-444c0b9dc0a8',
                name: 'Birthday cupcake',
                itemCount: 1,
              },
              {
                id: 'c51f23ec-ae51-481f-8db1-d52e875a9d89',
                name: '$100 Visa Gift Card',
                itemCount: 1,
              },
              {
                id: 'd37646f3-1712-4c9b-a879-31fc6eb72d8c',
                name: 'Birthday card',
                itemCount: 1,
              },
            ],
            price: 149.99,
          },
          {
            id: '22f4e926-21ee-4f89-a8ee-25d8e88ca83b',
            packageName: 'Valentines Box',
            contents: [
              {
                id: 'f80e6ce9-675a-4d5a-9d17-7212d01f1720',
                name: 'Red Roses Bouquet',
                itemCount: 1,
              },
              {
                id: '76d65ad2-a623-4131-86ab-b9559cd0c6c6',
                name: 'Box of chocolates',
                itemCount: 1,
              },
              {
                id: 'be87472b-4908-4a7d-8aaa-401ffda30f67',
                name: 'Love card',
                itemCount: 1,
              },
              {
                id: 'c1ac7231-adbd-40a8-b885-e76c7d75ff30',
                name: "Women's perfume",
                itemCount: 1,
              },
            ],
            price: 299.99,
          },
        ],
        total: 449.98,
      },
    ];

    const expected: Array<PickItem> = [
      {
        productName: 'Birthday cupcake',
        totalItems: 1,
      },
      {
        productName: '$100 Visa Gift Card',
        totalItems: 1,
      },
      {
        productName: 'Birthday card',
        totalItems: 1,
      },
      {
        productName: 'Red Roses Bouquet',
        totalItems: 1,
      },
      {
        productName: 'Box of chocolates',
        totalItems: 1,
      },
      {
        productName: 'Love card',
        totalItems: 1,
      },
      {
        productName: "Women's perfume",
        totalItems: 1,
      },
    ];

    expect(generatePickingList(order)).toEqual(expected);
  });

  it('generates empty list with no orders', () => {
    expect(generatePickingList([])).toEqual([]);
  });
});
