import { IScenarioInput } from "../components";

export const defaultInput = (): IScenarioInput => {
  return {
    xRangeMin: -5,
    xRangeMax: 5,
    cardinality: 1000,
    fFunc: {
      func: "1",
      enforceRange: true,
      rangeMin: 0,
      rangeMax: 1,
    },
    gFunc: {
      func: "x+1",
      enforceRange: true,
      rangeMin: -1,
      rangeMax: 0,
    },
  };
};
