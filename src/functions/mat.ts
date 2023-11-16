import { linespace, uniform } from ".";

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

export const flipAndShift = (x: number[], z: number) => {
  let zMinusX: number[] = [];
  x.forEach((xi) => {
    zMinusX.push(z - xi);
  });
  return zMinusX;
};

const conv = (min: number, max: number, card: number) => {
  let X: number[] = linespace(min, max, card);
  let f: number[] = uniform(X, 0, 2, 1);
  let stepSize: number = (max - min) / card;
  let Y: number[] = [];
  for (let i = 0; i < X.length; i++) {
    let z = i * stepSize + min;
    let g = uniform(flipAndShift(X, z), 0, 1, 0.5);
    let y = convolutionStep(f, g, stepSize);
    Y.push(y);
  }
  console.log(Y);
  return Y;
};
