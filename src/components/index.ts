export interface IScenarioInput {
  xRangeMin: number;
  xRangeMax: number;
  cardinality: number;

  fFunc: IFunctionInput
  gFunc: IFunctionInput
}

export interface IFunctionInput{
  func:string;
  enforceRange:boolean;
  rangeMin:number;
  rangeMax:number;
}

export interface IParallelArrays{
  x:number[]
  y:number[]
}

export interface IEvaluation{
  f:IParallelArrays;
  g:IParallelArrays;
  c:IParallelArrays;
}