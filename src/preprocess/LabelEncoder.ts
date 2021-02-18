interface LabelEncoder {
  categories: unknown[];
}

class LabelEncoder {
  constructor() {
    this.categories = [];
  }

  fit(values: unknown[]): LabelEncoder {
    this.categories = Array.from(new Set(values));
    return this;
  }

  transform(values: unknown[]): number[] {
    this._assertFitCalled();
    return values.map((val) => this.categories.indexOf(val));
  }

  fitTransform(values: unknown[]): number[] {
    return this.fit(values).transform(values);
  }

  inverseTransform(values: number[]): unknown[] {
    this._assertFitCalled();
    return values.map((index) => this.categories[index]);
  }

  _assertFitCalled(): void {
    if (this.categories.length === 0) {
      throw new Error('Must call fit before transforming values');
    }
  }
}

export default LabelEncoder;
