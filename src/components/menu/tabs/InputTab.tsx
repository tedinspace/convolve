import React from "react";
import { IScenarioInput } from "../..";
import { Box } from "grommet";
import { XRangeSetting } from "./kit/XRangeSetting";
import { FunctionInput } from "./kit/FunctionInput";
interface IProps {
  input: IScenarioInput;
  updateInput(input: IScenarioInput): void;

}
export function InputTab(props: IProps) {
  return (
    <Box>
      <XRangeSetting {...props}/>
      <FunctionInput {...props} func="fFunc"/>
      <FunctionInput {...props} func="gFunc"/>
    </Box>
  );
}

