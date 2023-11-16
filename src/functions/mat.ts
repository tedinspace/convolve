/**
 *
 * @param min
 * @param max
 * @param cardinality
 * @returns
 */
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

/**
 *
 * @param n
 * @returns
 */
export const zeros = (n: number): number[] => {
  let zArr: number[] = [];
  for (let i = 0; i < n; i++) {
    zArr.push(0);
  }
  return zArr;
};

/**
 *
 * @param f
 * @param g
 * @param stepSize
 * @returns
 */
export const convolutionStep = (
  f: number[],
  g: number[],
  stepSize: number
): number => {
  let y: number = 0;

  f.forEach((fx, i) => {
    y = y + fx * g[i] * stepSize;
  });

  return y;
};

/**
 *
 * @param x
 * @param z
 * @returns
 */
export const flipAndShift = (x: number[], z: number) => {
  let zMinusX: number[] = [];
  x.forEach((xi) => {
    zMinusX.push(z - xi);
  });
  return zMinusX;
};
