interface LabelEncoder {
  labels: any[]
}

class LabelEncoder {
  constructor () {
    this.labels = []
  }

  fit (values: any[]): LabelEncoder {
    const set = new Set(values)
    this.labels = Array.from(set)
    return this
  }

  transform (values: any[]): number[] {
    if (this.labels.length === 0) {
      throw new Error('Must call fit before transforming values')
    }
    return values.map(val => this.labels.indexOf(val))
  }

  fitTransform (values: any[]): any[] {
    return this.fit(values).transform(values)
  }

  inverseTransform (values: number[]): any[] {
    return values.map((index) => this.labels[index])
  }
}

export default LabelEncoder
