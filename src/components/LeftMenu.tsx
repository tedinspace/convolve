import React from "react";
import { IScenarioInput } from ".";
import { Box, CheckBox, Text, TextInput } from "grommet";

interface IProps {
  input: IScenarioInput;
  updateInput(input: IScenarioInput): void;
}
export function LeftMenu(props: IProps) {
  return (
    <Box
      style={{
        width: 400,
      }}
      fill
      pad="medium"
      elevation="small"
      border={{ color: "bar_accent", size: "2px", side: "right" }}
    >
      <Text>
        <b>Input</b>
      </Text>
      x-range [min, max]
      <Box direction="row">
        <div>
          <TextInput
            type="number"
            size="medium"
            value={props.input.xRangeMin}
            style={{ height: 20, textAlign: "center" }}
            width={"65px"}
            onChange={(e) => {
              props.updateInput({
                ...props.input,
                ...{
                  xRangeMin: +e.target.value,
                },
              });
            }}
          />
        </div>
        &nbsp;
        <div>
          <TextInput
            size="medium"
            type="number"
            value={props.input.xRangeMax}
            style={{ height: 20, textAlign: "center" }}
            width={"65px"}
            onChange={(e) => {
              props.updateInput({
                ...props.input,
                ...{
                  xRangeMax: +e.target.value,
                },
              });
            }}
          />
        </div>
      </Box>
      # steps
      <TextInput
        max={10000}
        min={10}
        type="number"
        size="medium"
        value={props.input.cardinality}
        style={{ height: 20, textAlign: "center" }}
        width={"100px"}
        onChange={(e) => {
          props.updateInput({
            ...props.input,
            ...{
              cardinality: +e.target.value,
            },
          });
        }}
      />
      <Box direction="row">
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
      </Box>
    </Box>
  );
}
