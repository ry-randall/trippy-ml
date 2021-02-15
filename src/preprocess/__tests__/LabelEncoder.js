import LabelEncoder from '../LabelEncoder'

describe('LabelEncoder', () => {
  it('should transform the data', () => {
    const labelEncoder = new LabelEncoder()
    const data = ['hello', 'world', 'hello', 'hello', 'world']
    const transformed = labelEncoder.fitTransform(data)
    const result = [0, 1, 0, 0, 1]
    expect(transformed).toEqual(result)
  })
  it('should reverseTransform the data', () => {
    const labelEncoder = new LabelEncoder()
    const original = ['hello', 'world', 'hello', 'hello', 'world']
    labelEncoder.fit(original)
    const inversed = [0, 1, 0, 0, 1]
    const inverseTransformed = labelEncoder.inverseTransform(inversed)
    expect(inverseTransformed).toEqual(original)
  })
})
