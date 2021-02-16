import OneHotEncoder from '../OneHotEncoder';

describe('OneHotEncoder', () => {
  it('should transform the dataset', () => {
    const oneHotEncoder = new OneHotEncoder();
    const data = ['world', 'hello', 'hello', 'bob'];
    const expected = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
    const transformed = oneHotEncoder.fitTransform(data);
    expect(transformed).toEqual(expected);
  });
  it('should inverse transform the dataset', () => {
    const oneHotEncoder = new OneHotEncoder();
    const original = ['world', 'hello', 'hello', 'bob'];
    const transformed = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
    oneHotEncoder.fit(original);
    expect(oneHotEncoder.inverseTransform(transformed)).toEqual(original);
  });
});
