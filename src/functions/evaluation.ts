import _ from "lodash";
import { parse } from "mathjs";
import {
  IParallelArrays,
  IScenarioInput,
  IFunctionInput,
  IEvaluation,
} from "../components";
import { flipAndShift, convolutionStep, linespace, add } from "./mat";

/**
 * Attempts to evaluate f(x), g(x), and (f*g)(x)
 * @param input
 * @returns
 */
export const runAllFunctionEvaluations = (
  input: IScenarioInput
): IEvaluation => {
  // 1. is the range and cardinality
  if (
    _.isNumber(input.cardinality) &&
    _.isNumber(input.xRangeMin) &&
    _.isNumber(input.xRangeMax) &&
    input.cardinality > 1 &&
    input.cardinality < 100000 &&
    input.xRangeMin < input.xRangeMax
  ) {
    let x: number[] = linespace(
      input.xRangeMin,
      input.xRangeMax,
      input.cardinality
    );
    let f = evaluateFunction(input.fFunc, x);
    let g = evaluateFunction(input.gFunc, x);
    return {
      f: f,
      g: g,
      c: convolve(f, g, input),
    };
  }
  return {
    f: { x: [], y: [] },
    g: { x: [], y: [] },
    c: { x: [], y: [] },
  };
};

/**
 * Evulate every portion of a function
 * @param func
 * @param x
 * @returns
 */
export const evaluateFunction = (
  func: IFunctionInput[],
  x: number[]
): {
  x: number[];
  y: number[];
} => {
  let y: number[] = [];
  func.forEach((fn) => {
    let F = evaluateSingleFunction(fn, x);
    if (_.isEmpty(y)) {
      y = F.y;
    } else if (F.y.length === y.length) {
      y = add(y, F.y);
    }
  });
  return {
    x: x,
    y: y,
  };
};

/**
 * Evaluate a single piece of a function
 * @param func
 * @param x
 * @returns
 */
export const evaluateSingleFunction = (
  func: IFunctionInput,
  x: number[]
): {
  x: number[];
  y: number[];
} => {
  let y: number[] = [];
  try {
    const node = parse(func.func);
    x.forEach((xi) => {
      if (func.enforceRange && (xi < func.rangeMin || xi > func.rangeMax)) {
        y.push(0);
      } else {
        y.push(node.evaluate({ x: xi }));
      }
    });
  } catch (e) {
    return {
      x: [],
      y: [],
    };
  }
  return {
    x: x,
    y: y,
  };
};

/**
 * Given evaluated f(x) and g(x), run the convolution
 * @param evalF
 * @param evalG
 * @param input
 * @returns
 */
export const convolve = (
  evalF: IParallelArrays,
  evalG: IParallelArrays,
  input: IScenarioInput
): IParallelArrays => {
  if (~_.isEmpty(evalF.x) && evalF.x.length === evalG.x.length) {
    let x: number[] = evalF.x;
    let f: number[] = evalF.y;
    try {
      let stepSize: number =
        (input.xRangeMax - input.xRangeMin) / input.cardinality;
      let y: number[] = [];
      for (let i = 0; i < x.length; i++) {
        let z = i * stepSize + input.xRangeMin;
        let g = evaluateFunction(input.gFunc, flipAndShift(x, z));
        let yi = convolutionStep(f, g.y, stepSize);
        y.push(yi);
      }
      return {
        x: x,
        y: y,
      };
    } catch (e) {}
  }
  return {
    x: [],
    y: [],
  };
};
