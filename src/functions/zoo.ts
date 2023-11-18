import { IFunctionInput, IScenarioInput } from "../components";

/**
 * starting functions when app loaded
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

/**
 * what's added when a piece is added
 * @returns 
 */
export const emptyFunction = ():IFunctionInput =>{
  return {
    func: "0",
    enforceRange: true,
    rangeMin: 0,
    rangeMax: 0,
  }
}

/**
 * left-facing right triangle
 * @returns 
 */
const leftTriangle =():IFunctionInput=>{
  return {
    func: "x+1",
    enforceRange: true,
    rangeMin: -1,
    rangeMax: 0,
  }
}
/**
 * right-facing right triangle
 * @returns 
 */
export const rightTriangle =():IFunctionInput=>{
  return {
    func: "-x+1",
    enforceRange: true,
    rangeMin: 0,
    rangeMax: 1,
  }
}
/**
 * symmetric triangle
 * @returns 
 */
export const symmetricTriangle =():IFunctionInput=>{
  return {
    func: "-abs(x)+1",
    enforceRange: true,
    rangeMin: -1,
    rangeMax: 1,
  }
}
/**
 * unit square
 * @returns 
 */
export const unitSquare =():IFunctionInput=>{
  return {
    func: "1",
    enforceRange: true,
    rangeMin: 0,
    rangeMax: 1,
  }
}
/**
 * area 1 rectangle with width 2 and height 1/2
 * @returns 
 */
export const rectanguleWidth2 =():IFunctionInput=>{
  return {
    func: "1/2",
    enforceRange: true,
    rangeMin: -1,
    rangeMax: 1,
  }
}