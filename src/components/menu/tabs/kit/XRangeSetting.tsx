import { Box, TextInput, Text, Tip } from "grommet";
import { IScenarioInput } from "../../..";
import { CircleQuestion } from "grommet-icons";

interface IProps {
  input: IScenarioInput;
  updateInput(input: IScenarioInput): void;
}
export function XRangeSetting(props: IProps) {
  return (
    <Box style={{ marginTop: 30 }}>
      <Text size="medium">
        x-range <i>[min, max]</i>
      </Text>
      <Box direction="row" style={{ marginTop: 10,marginLeft:0 }} align="center">
        <div>
          <TextInput
            type="number"
            size="medium"
            value={props.input.xRangeMin}
            style={{ height: 25, textAlign: "center" }}
            width={"120px"}
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
        &nbsp;&nbsp;
        <div>
          <TextInput
            size="medium"
            type="number"
            value={props.input.xRangeMax}
            style={{ height: 25, textAlign: "center" }}
            width={"120px"}
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
        &nbsp;&nbsp;
        <Tip content="global range; function ranges outside of this are not evaluated">
          <CircleQuestion />
        </Tip>
      </Box>
    </Box>
  );
}
