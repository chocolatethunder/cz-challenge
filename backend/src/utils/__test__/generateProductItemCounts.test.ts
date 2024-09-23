import generateProductItemCounts from '../generateProductItemCounts';

describe('generateProductItemCounts', () => {
  it('returns the correct number of item counts', () => {
    const data = [
      {
        id: 'f80e6ce9-675a-4d5a-9d17-7212d01f1720',
        name: 'Red Roses Bouquet',
        itemCount: 0,
      },
      {
        id: '76d65ad2-a623-4131-86ab-b9559cd0c6c6',
        name: 'Box of chocolates',
        itemCount: 0,
      },
      {
        id: 'be87472b-4908-4a7d-8aaa-401ffda30f67',
        name: 'Love card',
        itemCount: 0,
      },
    ];

    const expected = [
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
    ];

    expect(generateProductItemCounts(data)).toEqual(expected);
  });

  it('returns the correct number of item counts with duplicates', () => {
    const data = [
      {
        id: 'f80e6ce9-675a-4d5a-9d17-7212d01f1720',
        name: 'Red Roses Bouquet',
        itemCount: 0,
      },
      {
        id: '76d65ad2-a623-4131-86ab-b9559cd0c6c6',
        name: 'Box of chocolates',
        itemCount: 0,
      },
      {
        id: '76d65ad2-a623-4131-86ab-b9559cd0c6c6',
        name: 'Box of chocolates',
        itemCount: 0,
      },
      {
        id: 'be87472b-4908-4a7d-8aaa-401ffda30f67',
        name: 'Love card',
        itemCount: 0,
      },
      {
        id: 'be87472b-4908-4a7d-8aaa-401ffda30f67',
        name: 'Love card',
        itemCount: 0,
      },
    ];

    const expected = [
      {
        id: 'f80e6ce9-675a-4d5a-9d17-7212d01f1720',
        name: 'Red Roses Bouquet',
        itemCount: 1,
      },
      {
        id: '76d65ad2-a623-4131-86ab-b9559cd0c6c6',
        name: 'Box of chocolates',
        itemCount: 2,
      },
      {
        id: 'be87472b-4908-4a7d-8aaa-401ffda30f67',
        name: 'Love card',
        itemCount: 2,
      },
    ];

    expect(generateProductItemCounts(data)).toEqual(expected);
  });
});
