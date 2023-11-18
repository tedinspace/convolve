import { IScenarioInput, IEvaluation } from "../components";
import { evaluateFunction } from "./evaluation";
import { flipAndShift } from "./mat";
/**
 * build a trace for g(x-tau)
 * @param tau
 * @param input
 * @param results
 * @returns
 */
export const flippedGTrace = (
  tau: number,
  input: IScenarioInput,
  results: IEvaluation
): any => {
  let x: number[] = [];
  let y: number[] = [];

  try {
    if (tau > 0 && tau < results.g.x.length) {
      let stepSize: number =
        (input.xRangeMax - input.xRangeMin) / input.cardinality;
      let z = tau * stepSize + input.xRangeMin;
      x = results.g.x;
      y = evaluateFunction(input.gFunc, flipAndShift(results.f.x, z)).y;
    }
  } catch (e) {}

  return {
    x: x,
    y: y,
    type: "scattergl",
    mode: "lines",
    marker: { color: "blue" },
    line: {
      dash: "dot",
    },
  };
};
/**
 * given an evaluated convolution, select a portion by step/tau
 * @param tau
 * @param results
 * @returns
 */
export const partialConvolutionTrace = (
  tau: number,
  results: IEvaluation
): any => {
  let x: number[] = [];
  let y: number[] = [];
  if (tau > 0 && tau < results.c.x.length) {
    for (let i = 0; i < tau; i++) {
      x.push(results.c.x[i]);
      y.push(results.c.y[i]);
    }
  }
  return {
    x: x,
    y: y,
    type: "scattergl",
    mode: "lines",
    marker: { color: "green" },
  };
};
