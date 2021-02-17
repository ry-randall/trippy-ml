import StandardScaler from '../StandardScaler';

function round(num: number, places = 3) {
  return parseFloat(num.toFixed(places));
}

function roundAll(numbers: number[], places = 3) {
  return numbers.map((num) => round(num, places));
}

describe('StandardScaler', () => {
  it('should have the correct mean', () => {
    const standardScaler = new StandardScaler();
    standardScaler.fit([82, 93, 98, 89, 88]);
    expect(standardScaler.mean).toEqual(90);
  });
  it('should have the correct standard deviation', () => {
    const standardScaler = new StandardScaler();
    standardScaler.fit([82, 93, 98, 89, 88]);
    const roundedStandardDeviation = round(standardScaler.standardDeviation);
    expect(roundedStandardDeviation).toEqual(5.329);
  });
  it('should transform a partial dataset', () => {
    const standardScaler = new StandardScaler();
    standardScaler.fit([82, 93, 98, 89, 88]);
    const transformed = standardScaler.transform([82, 93]);
    expect(roundAll(transformed)).toEqual([-1.501, 0.563]);
  });
  it('should transform the entire dataset', () => {
    const standardScaler = new StandardScaler();
    const transformed = standardScaler.fitTransform([82, 93, 98, 89, 88]);
    expect(roundAll(transformed)).toEqual([-1.501, 0.563, 1.501, -0.188, -0.375]);
  });
});
