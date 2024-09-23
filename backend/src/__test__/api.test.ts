import request from 'supertest';
import app from '../app';

describe('Pick API Endpoint', () => {
  it('GET /pick - should return list of items to pick', async () => {
    const response = await request(app).get('/order/pick');

    const expectedResponse = [
      {
        productName: 'Birthday cupcake',
        totalItems: 2,
      },
      {
        productName: '$100 Visa Gift Card',
        totalItems: 2,
      },
      {
        productName: 'Birthday card',
        totalItems: 2,
      },
      {
        productName: 'Red Roses Bouquet',
        totalItems: 2,
      },
      {
        productName: 'Box of chocolates',
        totalItems: 2,
      },
      {
        productName: 'Love card',
        totalItems: 2,
      },
      {
        productName: "Women's perfume",
        totalItems: 2,
      },
    ];

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});

describe('Pack API Endpoint', () => {
  it('GET /pack - should return list of items to pack', async () => {
    const response = await request(app).get('/order/pack');

    const expectedResponse = [
      {
        customerEmail: 'john.smith@mranderson.com',
        customerName: 'John Smith',
        id: 'ed1cf7f2-c368-4691-ba96-73a30b18b989',
        lineItems: [
          {
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
            id: '521e56d5-6567-4756-830b-a4006abba092',
            packageName: 'Birthday Box',
            price: 149.99,
          },
          {
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
            id: '22f4e926-21ee-4f89-a8ee-25d8e88ca83b',
            packageName: 'Valentines Box',
            price: 299.99,
          },
        ],
        orderDate: 'September 15th, 2023',
        shippingAddress: '100 dundas Street east',
        total: 449.98,
      },
      {
        customerEmail: 'rob.smith@anon.com',
        customerName: 'Rob Smith',
        id: '99d9f6d2-c427-4e02-8fd5-aae70b9e20dc',
        lineItems: [
          {
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
            id: '22f4e926-21ee-4f89-a8ee-25d8e88ca83b',
            packageName: 'Valentines Box',
            price: 299.99,
          },
        ],
        orderDate: 'September 15th, 2023',
        shippingAddress: '100 queen Street east',
        total: 299.99,
      },
      {
        customerEmail: 'dan.smith@dantheman.com',
        customerName: 'Dan Smith',
        id: '9046a0dc-bd4a-4e1b-940c-549657167499',
        lineItems: [
          {
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
            id: '521e56d5-6567-4756-830b-a4006abba092',
            packageName: 'Birthday Box',
            price: 149.99,
          },
        ],
        orderDate: 'September 15th, 2023',
        shippingAddress: '100 king Street east',
        total: 149.99,
      },
    ];

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});
