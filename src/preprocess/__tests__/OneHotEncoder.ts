import OneHotEncoder from '../OneHotEncoder';

describe('OneHotEncoder', () => {
  it('should transform a partial dataset', () => {
    const oneHotEncoder = new OneHotEncoder();
    const data = ['world', 'hello', 'hello', 'bob'];
    oneHotEncoder.fit(data);
    const partialTransformed = oneHotEncoder.transform(['hello', 'world']);
    expect(partialTransformed).toEqual([
      [0, 1, 0],
      [1, 0, 0],
    ]);
  });
  it('should transform the entire dataset', () => {
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
  it('should inverse transform a partial dataset', () => {
    const oneHotEncoder = new OneHotEncoder();
    const original = ['world', 'hello', 'hello', 'bob'];
    oneHotEncoder.fit(original);
    expect(
      oneHotEncoder.inverseTransform([
        [0, 0, 1],
        [1, 0, 0],
      ]),
    ).toEqual(['bob', 'world']);
  });
  it('should inverse transform the entire dataset', () => {
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
