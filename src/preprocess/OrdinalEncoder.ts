interface OrdinalEncoder {
  categories: unknown[];
  orderedCategories: unknown[];
}

class OrdinalEncoder {
  constructor(orderedCategories: unknown[]) {
    this.orderedCategories = orderedCategories;
  }

  fit(values: unknown[]): OrdinalEncoder {
    this.categories = Array.from(new Set(values));
    return this;
  }

  transform(values: unknown[]): number[] {
    this._assertFitCalled();
    return values.map((val) => this.orderedCategories.indexOf(val));
  }

  fitTransform(values: unknown[]): number[] {
    return this.fit(values).transform(values);
  }

  inverseTransform(values: number[]): unknown[] {
    this._assertFitCalled();
    return values.map((val) => this.orderedCategories[val]);
  }

  _assertFitCalled(): void {
    if (this.categories.length === 0) {
      throw new Error('Must call fit before transforming values');
    }
  }
}
export default OrdinalEncoder;
