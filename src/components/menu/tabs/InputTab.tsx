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
    <Box fill overflow={"auto"} align="center" >
      <div><XRangeSetting {...props}/></div>
      <div><FunctionInput {...props} func="fFunc"/></div>
      <div><FunctionInput {...props} func="gFunc"/></div>
    </Box>
  );
}

