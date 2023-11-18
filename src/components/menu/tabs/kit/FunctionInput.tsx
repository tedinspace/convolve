import { Box, Button, CheckBox, Text, TextInput, Tip } from "grommet";
import { IFunctionInput, IScenarioInput } from "../../..";
import { AddCircle, CircleQuestion, FormClose } from "grommet-icons";
import _ from "lodash";
import { emptyFunction } from "../../../../functions/zoo";
const Latex = require("react-latex");

interface IProps {
  input: IScenarioInput;
  updateInput(input: IScenarioInput): void;
  func: "fFunc" | "gFunc";
}
export function FunctionInput(props: IProps) {
  return (
    <Box style={{ marginTop: 55 }}>
      <Text size="medium">
        <i>{props.func === "fFunc" ? "f(x)=" : "g(x)="}</i>
      </Text>
      {_.map(props.input[props.func], (fn: IFunctionInput, i: number) => {
        return (
          <span id={"cont-" + i} key={i}>
            <Box direction="row" style={{ marginTop: 10, marginLeft: 20 }}>
              <div>
                <TextInput
                  value={fn.func}
                  style={{ height: 25 }}
                  width={"225px"}
                  onChange={(e) => {
                    let S = _.cloneDeep(props.input);
                    S[props.func][i].func = e.target.value;
                    props.updateInput(S);
                  }}
                />
              </div>
              {props.input[props.func].length > 1 && (
                <>
                  <Button
                    icon={<FormClose color="warning" />}
                    pad="none"
                    onClick={() => {
                      let S = _.cloneDeep(props.input);
                      S[props.func].splice(i, 1);
                      props.updateInput(S);
                    }}
                  />
                </>
              )}
            </Box>
            <Box
              direction="row"
              style={{ marginTop: 10, marginLeft: 20 }}
              align="center"
            >
              <Latex>$x \in $</Latex>&nbsp;
              <div>
                <TextInput
                  type="number"
                  size="medium"
                  value={fn.rangeMin}
                  style={{ height: 25, textAlign: "center" }}
                  width={"90px"}
                  disabled={!fn.enforceRange}
                  onChange={(e) => {
                    let S = _.cloneDeep(props.input);
                    S[props.func][i].rangeMin = +e.target.value;
                    props.updateInput(S);
                  }}
                />
              </div>
              &nbsp;
              <div>
                <TextInput
                  size="medium"
                  type="number"
                  value={fn.rangeMax}
                  style={{ height: 25, textAlign: "center" }}
                  width={"90px"}
                  disabled={!fn.enforceRange}
                  onChange={(e) => {
                    let S = _.cloneDeep(props.input);
                    S[props.func][i].rangeMax = +e.target.value;
                    props.updateInput(S);
                  }}
                />
              </div>
              &nbsp;
              <CheckBox
                checked={fn.enforceRange}
                onChange={() => {
                  let S = _.cloneDeep(props.input);
                  S[props.func][i].enforceRange =
                    !S[props.func][i].enforceRange;
                  props.updateInput(S);
                }}
              />
              {i === 0 ? (
                <>
                  &nbsp;&nbsp;
                  <Tip content={CheckBoxTip(fn, props.input)}>
                    <CircleQuestion size="medium" />
                  </Tip>
                </>
              ) : (
                <></>
              )}
            </Box>
          </span>
        );
      })}
      <Box width={"225px"} style={{ marginLeft: 20, marginTop: 10 }}>
        <Button
          pad={"none"}
          icon={<AddCircle size="15px" />}
          hoverIndicator
          label="add piece"
          fill="horizontal"
          color="time_bar"
          onClick={() => {
            let S = _.cloneDeep(props.input);
            S[props.func].push(emptyFunction());
            props.updateInput(S);
          }}
        />
      </Box>
    </Box>
  );
}

function CheckBoxTip(fn: IFunctionInput, input: IScenarioInput) {
  if (fn.enforceRange) {
    return (
      "restricted to set range: [" + fn.rangeMin + ", " + fn.rangeMax + "]"
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
