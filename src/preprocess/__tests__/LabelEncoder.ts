import LabelEncoder from '../LabelEncoder';

describe('LabelEncoder', () => {
  it('should transform a partial dataset', () => {
    const labelEncoder = new LabelEncoder();
    const data = ['hello', 'world', 'hello', 'bob', 'world'];
    labelEncoder.fit(data);
    expect(labelEncoder.transform(['hello', 'bob'])).toEqual([0, 2]);
  });
  it('should transform the entire dataset', () => {
    const labelEncoder = new LabelEncoder();
    const data = ['hello', 'world', 'hello', 'bob', 'world'];
    const transformed = labelEncoder.fitTransform(data);
    const result = [0, 1, 0, 2, 1];
    expect(transformed).toEqual(result);
  });
  it('should inverse transform a partial dataset', () => {
    const labelEncoder = new LabelEncoder();
    const data = ['hello', 'world', 'hello', 'bob', 'world'];
    labelEncoder.fit(data);
    expect(labelEncoder.inverseTransform([2, 1])).toEqual(['bob', 'world']);
  });
  it('should inverse transform the entire dataset', () => {
    const labelEncoder = new LabelEncoder();
    const original = ['hello', 'world', 'hello', 'bob', 'world'];
    labelEncoder.fit(original);
    const inversed = [0, 1, 0, 2, 1];
    const inverseTransformed = labelEncoder.inverseTransform(inversed);
    expect(inverseTransformed).toEqual(original);
  });
});
