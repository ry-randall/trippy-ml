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
    this._assertFitCalled();
    // LaTeX: x'=\frac{x_i -\overline{x}}{\sigma}
    return values.map((val) => (val - this.mean) / this.standardDeviation);
  }

  inverseTransform(values: number[]): number[] {
    this._assertFitCalled();
    // LaTeX: x_i=x'\sigma+\overline{x}
    return values.map((val) => val * this.standardDeviation + this.mean);
  }

  fitTransform(values: number[]): number[] {
    return this.fit(values).transform(values);
  }

  _assertFitCalled(): void {
    if (!this.mean && !this.standardDeviation) {
      throw new Error('Must call fit before transforming values');
    }
  }
}
export default StandardScaler;
