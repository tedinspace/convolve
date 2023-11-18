import { IFunctionInput, IScenarioInput } from "../components";

/**
 * 
 * @returns 
 */
export const defaultInput = (): IScenarioInput => {
  return {
    xRangeMin: -5,
    xRangeMax: 5,
    cardinality: 750,
    fFunc: [leftTriangle()],
    gFunc: [rightTriangle()]
  };
};

export const emptyFunction = ():IFunctionInput =>{
  return {
    func: "0",
    enforceRange: true,
    rangeMin: 0,
    rangeMax: 0,
  }
}

const leftTriangle =():IFunctionInput=>{
  return {
    func: "x+1",
    enforceRange: true,
    rangeMin: -1,
    rangeMax: 0,
  }
}

const rightTriangle =():IFunctionInput=>{
  return {
    func: "-x+1",
    enforceRange: true,
    rangeMin: 0,
    rangeMax: 1,
  }
}

export const unitSquare =():IFunctionInput=>{
  return {
    func: "1",
    enforceRange: true,
    rangeMin: 0,
    rangeMax: 1,
  }
}