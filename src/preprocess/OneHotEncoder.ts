interface OneHotEncoder {
  categories: unknown[];
}
class OneHotEncoder {
  constructor() {
    this.categories = [];
  }

  fit(values: unknown[]): OneHotEncoder {
    this.categories = Array.from(new Set(values));
    return this;
  }

  transform(values: unknown[]): number[][] {
    this._assertFitCalled();
    return values.map((val) => {
      const onesIndex = this.categories.indexOf(val);
      const length = this.categories.length;
      const oneHotArray = this._createOneHotArray(onesIndex, length);
      return oneHotArray;
    });
  }

  fitTransform(values: unknown[]): number[][] {
    return this.fit(values).transform(values);
  }

  inverseTransform(values: number[][]): unknown[] {
    this._assertFitCalled();
    return values.map((oneHotArray) => {
      const index = oneHotArray.indexOf(1);
      return this.categories[index];
    });
  }

  _assertFitCalled(): void {
    if (this.categories.length === 0) {
      throw new Error('Must call fit before transforming values');
    }
  }

  _createOneHotArray(oneIndex: number, length: number): number[] {
    const arr = Array(length).fill(0);
    arr[oneIndex] = 1;
    return arr;
  }
}
export default OneHotEncoder;
