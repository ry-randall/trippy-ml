function calculateMean(values: number[]): number {
  // LaTeX: \frac{\sum{x_i}}{n}
  return values.reduce((acc, val) => acc + val, 0) / values.length;
}

function calculateStandardDeviation(values: number[]): number {
  // LaTeX: \sqrt{\frac{\sum{(x_i-\overline{x})}^2}{n-1}}
  // Note: This is a population sd, not sample
  const mean = calculateMean(values);
  const numerator = values.reduce((acc, xi) => {
    const val = Math.pow(xi - mean, 2);
    return val + acc;
  }, 0);
  const denominator = values.length;
  return Math.sqrt(numerator / denominator);
}

export { calculateMean, calculateStandardDeviation };
