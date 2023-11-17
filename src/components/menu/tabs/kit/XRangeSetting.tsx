import { Box, TextInput } from "grommet";
import { IScenarioInput } from "../../..";

interface IProps {
  input: IScenarioInput;
  updateInput(input: IScenarioInput): void;

}
export function XRangeSetting(props: IProps) {
  return (
    <Box>
      <Box direction="row">
        x-range [min, max]
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
    </Box>
  );
}
