import React from "react";
import { IScenarioInput } from "../..";
import { Box } from "grommet";
import { XRangeSetting } from "./kit/XRangeSetting";
interface IProps {
  input: IScenarioInput;
  updateInput(input: IScenarioInput): void;

}
export function InputTab(props: IProps) {
  return (
    <Box>
      <XRangeSetting {...props}/>
      {/* <Box direction="row">
        f(x)=&nbsp;&nbsp;
        <TextInput
          value={props.input.fFunc.func}
          style={{ height: 20 }}
          width={"150px"}
          onChange={(e) => {
            props.updateInput({
              ...props.input,
              ...{
                fFunc: {
                  ...props.input.fFunc,
                  ...{
                    func: e.target.value,
                  },
                },
              },
            });
          }}
        />
      </Box>
      <Box direction="row">
        <div>
          <TextInput
            type="number"
            size="medium"
            value={props.input.fFunc.rangeMin}
            style={{ height: 20 }}
            width={"65px"}
            onChange={(e) => {
              props.updateInput({
                ...props.input,
                ...{
                  fFunc: {
                    ...props.input.fFunc,
                    ...{
                      rangeMin: +e.target.value,
                    },
                  },
                },
              });
            }}
            disabled={!props.input.fFunc.enforceRange}
          />
        </div>
        &nbsp;
        <div>
          <TextInput
            size="medium"
            type="number"
            value={props.input.fFunc.rangeMax}
            style={{ height: 20 }}
            width={"65px"}
            onChange={(e) => {
              props.updateInput({
                ...props.input,
                ...{
                  fFunc: {
                    ...props.input.fFunc,
                    ...{
                      rangeMax: +e.target.value,
                    },
                  },
                },
              });
            }}
            disabled={!props.input.fFunc.enforceRange}
          />
        </div>
        <CheckBox
          checked={props.input.fFunc.enforceRange}
          onChange={(e) => {
            props.updateInput({
              ...props.input,
              ...{
                fFunc: {
                  ...props.input.fFunc,
                  ...{
                    enforceRange: !props.input.fFunc.enforceRange,
                  },
                },
              },
            });
          }}
        />
        &nbsp;&nbsp;
        <Tip content={CheckBoxTip("fFunc", props.input)}>
          <CircleQuestion size="medium" color="orange_light" />
        </Tip>
      </Box>
      <Box direction="row">
        g(x)=&nbsp;
        <TextInput
          value={props.input.gFunc.func}
          style={{ height: 20 }}
          width={"150px"}
          onChange={(e) => {
            props.updateInput({
              ...props.input,
              ...{
                gFunc: {
                  ...props.input.gFunc,
                  ...{
                    func: e.target.value,
                  },
                },
              },
            });
          }}
        />
      </Box>
      <Box direction="row">
        <div>
          <TextInput
            type="number"
            size="medium"
            value={props.input.gFunc.rangeMin}
            style={{ height: 20 }}
            width={"65px"}
            onChange={(e) => {
              props.updateInput({
                ...props.input,
                ...{
                  gFunc: {
                    ...props.input.gFunc,
                    ...{
                      rangeMin: +e.target.value,
                    },
                  },
                },
              });
            }}
            disabled={!props.input.gFunc.enforceRange}
          />
        </div>
        &nbsp;
        <div>
          <TextInput
            size="medium"
            type="number"
            value={props.input.gFunc.rangeMax}
            style={{ height: 20 }}
            width={"65px"}
            onChange={(e) => {
              props.updateInput({
                ...props.input,
                ...{
                  gFunc: {
                    ...props.input.gFunc,
                    ...{
                      rangeMax: +e.target.value,
                    },
                  },
                },
              });
            }}
            disabled={!props.input.gFunc.enforceRange}
          />
        </div>
        <CheckBox
          checked={props.input.gFunc.enforceRange}
          onChange={(e) => {
            props.updateInput({
              ...props.input,
              ...{
                gFunc: {
                  ...props.input.gFunc,
                  ...{
                    enforceRange: !props.input.gFunc.enforceRange,
                  },
                },
              },
            });
          }}
        />
        &nbsp;&nbsp;
        <Tip content={CheckBoxTip("gFunc", props.input)}>
          <CircleQuestion size="medium" color="orange_light" />
        </Tip>
      </Box> */}
    </Box>
  );
}

function CheckBoxTip(func: "gFunc" | "fFunc", input: IScenarioInput) {
  if (input[func].enforceRange) {
    return (
      "restricted to set range: [" +
      input[func].rangeMin +
      ", " +
      input[func].rangeMax +
      "]"
    );
  }
  return (
    "fitted to scenario's x-range: [" +
    input.xRangeMin +
    ", " +
    input.xRangeMax +
    "]"
  );
}
