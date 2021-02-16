interface OneHotEncoder {
  labels: unknown[];
}
class OneHotEncoder {
  constructor() {
    this.labels = [];
  }

  fit(values: unknown[]): OneHotEncoder {
    this.labels = Array.from(new Set(values));
    return this;
  }

  transform(values: unknown[]): number[][] {
    return values.map((val) => {
      const onesIndex = this.labels.indexOf(val);
      const length = this.labels.length;
      const oneHotArray = this._createOneHotArray(onesIndex, length);
      return oneHotArray;
    });
  }

  fitTransform(values: unknown[]): number[][] {
    return this.fit(values).transform(values);
  }

  inverseTransform(values: number[][]): unknown[] {
    /*
      [
        [1, 0, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 0, 1]
      ]
    */
    // labels: ['world', 'hello', 'bob']
    // We want: ['world', 'hello', 'hello', 'bob']
    return values.map((oneHotArray) => {
      const index = oneHotArray.indexOf(1);
      return this.labels[index];
    });
  }

  _createOneHotArray(oneIndex: number, length: number): number[] {
    const arr = Array(length).fill(0);
    arr[oneIndex] = 1;
    return arr;
  }
}
export default OneHotEncoder;
