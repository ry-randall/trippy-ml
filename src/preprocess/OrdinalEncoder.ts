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
    return values.map((val) => this.orderedCategories.indexOf(val));
  }

  fitTransform(values: unknown[]): number[] {
    return this.fit(values).transform(values);
  }

  inverseTransform(values: number[]): unknown[] {
    return values.map((val) => this.orderedCategories[val]);
  }
}
export default OrdinalEncoder;
