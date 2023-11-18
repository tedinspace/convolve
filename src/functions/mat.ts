/**
 * create uniform x array based on range and cardinality 
 * @param min
 * @param max
 * @param cardinality - number of steps
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
 * create a 1xn array of all zeros
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
 * single convolution step at tau/z
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
 * flip and shift x-array by z
 * @param x
 * @param z - tau
 * @returns
 */
export const flipAndShift = (x: number[], z: number) => {
  let zMinusX: number[] = [];
  x.forEach((xi) => {
    zMinusX.push(z - xi);
  });
  return zMinusX
   
};

/**
 * add two arrays together 
 * @param arr1 1xn
 * @param arr2 1nx
 * @returns 
 */
export const add = (arr1:number[], arr2:number[]):number[]=>{
  let out:number[]=[];
  arr1.forEach((n,i) => {
    out.push(n + arr2[i])
  });
  return out;
}
