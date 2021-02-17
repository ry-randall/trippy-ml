import { calculateMean, calculateStandardDeviation } from '../utils/math';

interface StandardScaler {
  mean: number;
  standardDeviation: number;
}

class StandardScaler {
  constructor() {
    this.mean;
    this.standardDeviation;
  }

  fit(values: number[]): StandardScaler {
    this.mean = calculateMean(values);
    this.standardDeviation = calculateStandardDeviation(values);
    return this;
  }

  transform(values: number[]): number[] {
    // LaTeX: x'=\frac{x -\overline{x}}{\sigma}
    return values.map((val) => (val - this.mean) / this.standardDeviation);
  }

  fitTransform(values: number[]): number[] {
    return this.fit(values).transform(values);
  }
}
export default StandardScaler;
