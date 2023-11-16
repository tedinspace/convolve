export const linespace = (
  min: number,
  max: number,
  cardinality: number
): number[] => {
  let N: number[] = [];
  let step: number = (max - min) / (cardinality - 1);

  if (min < max && cardinality > 1 && step > 0) {
    let cVal: number = min;
    while (cVal <= max) {
      N.push(cVal);
      cVal = cVal + step;
    }
    if (cVal !== max) {
      N.push(max);
    }
  }
  return N;
};

export const uniform = (
  xRange: number[],
  min: number,
  max: number,
  val: number
) => {
  let f: number[] = [];

  xRange.forEach((x) => {
    if (x >= min && x <= max) {
      f.push(val);
    } else {
      f.push(0);
    }
  });
  return f;
};

