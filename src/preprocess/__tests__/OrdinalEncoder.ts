import OrdinalEncoder from '../OrdinalEncoder';

describe('OrdinalEncoder', () => {
  it('should have the correct categories', () => {
    const order = ['XS', 'S', 'M', 'L', 'XL'];
    const data = ['M', 'XL', 'S'];
    const ordinalEncoder = new OrdinalEncoder(order);
    ordinalEncoder.fit(data);
    expect(ordinalEncoder.categories).toEqual(['M', 'XL', 'S']);
  });
  it('should transform a partial dataset', () => {
    const order = ['XS', 'S', 'M', 'L', 'XL'];
    const data = ['M', 'XL', 'S', 'L', 'XS', 'M', 'XL', 'M'];
    const ordinalEncoder = new OrdinalEncoder(order);
    ordinalEncoder.fit(data);
    const transformed = ordinalEncoder.transform(['XS', 'L', 'M']);
    expect(transformed).toEqual([0, 3, 2]);
  });
  it('should transform the entire dataset', () => {
    const order = ['XS', 'S', 'M', 'L', 'XL'];
    const data = ['M', 'XL', 'S', 'L', 'XS', 'M', 'XL', 'M'];
    const ordinalEncoder = new OrdinalEncoder(order);
    const transformed = ordinalEncoder.fitTransform(data);
    expect(transformed).toEqual([2, 4, 1, 3, 0, 2, 4, 2]);
  });
  it('should inverse transform a partial dataset', () => {
    const order = ['XS', 'S', 'M', 'L', 'XL'];
    const data = ['M', 'XL', 'S', 'L', 'XS', 'M', 'XL', 'M'];
    const ordinalEncoder = new OrdinalEncoder(order);
    ordinalEncoder.fit(data);
    const transformed = ordinalEncoder.transform(['XS', 'L', 'M']);
    expect(transformed).toEqual([0, 3, 2]);
  });
  it('should inverse transform the entire dataset', () => {
    const order = ['XS', 'S', 'M', 'L', 'XL'];
    const original = ['M', 'XL', 'S', 'L', 'XS', 'M', 'XL', 'M'];
    const ordinalEncoder = new OrdinalEncoder(order);
    ordinalEncoder.fit(original);
    const inversed = ordinalEncoder.inverseTransform([2, 4, 1, 3, 0, 2, 4, 2]);
    expect(inversed).toEqual(original);
  });
});
