interface LabelEncoder {
  labels: unknown[];
}

class LabelEncoder {
  constructor() {
    this.labels = [];
  }

  fit(values: unknown[]): LabelEncoder {
    const set = new Set(values);
    this.labels = Array.from(set);
    return this;
  }

  transform(values: unknown[]): number[] {
    if (this.labels.length === 0) {
      throw new Error('Must call fit before transforming values');
    }
    return values.map((val) => this.labels.indexOf(val));
  }

  fitTransform(values: unknown[]): number[] {
    return this.fit(values).transform(values);
  }

  inverseTransform(values: number[]): unknown[] {
    return values.map((index) => this.labels[index]);
  }
}

export default LabelEncoder;
