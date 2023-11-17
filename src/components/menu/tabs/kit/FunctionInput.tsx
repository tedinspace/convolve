import { Box, CheckBox, Text, TextInput, Tip } from "grommet";
import { IScenarioInput } from "../../..";
import { CircleQuestion } from "grommet-icons";
const Latex = require("react-latex");

interface IProps {
  input: IScenarioInput;
  updateInput(input: IScenarioInput): void;
  func: "fFunc" | "gFunc";
}
export function FunctionInput(props: IProps) {
  return (
    <Box style={{ marginTop: 55 }}>
      <Text size="large">
        <i>{props.func === "fFunc" ? "f(x)=" : "g(x)="}</i>
      </Text>
      <Box direction="row" style={{ marginTop: 10, marginLeft:20 }} >
        <TextInput
          value={props.input[props.func].func}
          style={{ height: 30 }}
          width={"225px"}
          onChange={(e) => {
            props.updateInput({
              ...props.input,
              ...{
                [props.func]: {
                  ...props.input[props.func],
                  ...{
                    func: e.target.value,
                  },
                },
              },
            });
          }}
        />
      </Box>
      <Box direction="row" style={{ marginTop: 10 , marginLeft:20}} align="center">
        <Latex>$x \in $</Latex>&nbsp;
        <div>
          <TextInput
            type="number"
            size="medium"
            value={props.input[props.func].rangeMin}
            style={{ height: 30, textAlign: "center" }}
            width={"90px"}
            onChange={(e) => {
              props.updateInput({
                ...props.input,
                ...{
                    [props.func]: {
                    ...props.input[props.func],
                    ...{
                      rangeMin: +e.target.value,
                    },
                  },
                },
              });
            }}
            disabled={!props.input[props.func].enforceRange}
          />
        </div>
        &nbsp;
        <div>
          <TextInput
            size="medium"
            type="number"
            value={props.input[props.func].rangeMax}
            style={{ height: 30, textAlign: "center" }}
            width={"90px"}
            onChange={(e) => {
              props.updateInput({
                ...props.input,
                ...{
                    [props.func]: {
                    ...props.input[props.func],
                    ...{
                      rangeMax: +e.target.value,
                    },
                  },
                },
              });
            }}
            disabled={!props.input[props.func].enforceRange}
          />
        </div>
        &nbsp;
        <CheckBox
          checked={props.input[props.func].enforceRange}
          onChange={(e) => {
            props.updateInput({
              ...props.input,
              ...{
                [props.func]: {
                  ...props.input[props.func],
                  ...{
                    enforceRange: !props.input[props.func].enforceRange,
                  },
                },
              },
            });
          }}
        />
        &nbsp;&nbsp;
        <Tip content={CheckBoxTip( props.func, props.input)}>
          <CircleQuestion size="medium"/>
        </Tip>
      </Box>
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
  