import { Box, Button, RangeInput } from "grommet";
import Plot from "react-plotly.js";
import { default_margin, default_config, dark_layout } from "../functions/plot";
import { IEvaluation, IScenarioInput } from ".";
import {
  ChapterNext,
  ChapterPrevious,
  FastForward,
  Rewind,
} from "grommet-icons";
import { dynamicTraces } from "../functions/traces";
import { useMemo } from "react";
const Latex = require("react-latex");
const STEP_SIZE: number = 20;
interface IProps {
  darkMode: boolean;
  input: IScenarioInput;
  results: IEvaluation;
  tau: number;
  updateTau(tau: number): void;
}
export function PlotGrid(props: IProps) {
  const builtTraces = useMemo(
    () => dynamicTraces(props.input, props.results, props.tau),
    [props.input, props.results, props.tau]
  );

  return (
    <Box fill>
      <Box
        fill
        direction="row"
        pad="xsmall"
        border={{
          side: "bottom",
          size: "3px",
          color: "bar_accent",
        }}
        elevation="xsmall"
      >
        <Box fill>
          <Plot
            data={[
              {
                x: props.results.f.x,
                y: props.results.f.y,
                type: "scattergl",
                mode: "lines",
                marker: { color: "red" },
              },
            ]}
            style={{ width: "100%", height: "50%" }}
            useResizeHandler={true}
            layout={
              !props.darkMode
                ? {
                    title: "f(x)",
                    margin: default_margin(),
                    dragmode: false,
                  }
                : {
                    ...dark_layout(),
                    ...{
                      title: "f(x)",
                      margin: default_margin(),
                      dragmode: false,
                    },
                  }
            }
            config={default_config()}
          />
          <Plot
            data={[
              {
                x: props.results.g.x,
                y: props.results.g.y,
                type: "scattergl",
                mode: "lines",
                marker: { color: "blue" },
              },
            ]}
            style={{ width: "100%", height: "50%" }}
            useResizeHandler={true}
            layout={
              !props.darkMode
                ? {
                    title: "g(x)",
                    margin: default_margin(),
                    dragmode: false,
                  }
                : {
                    ...dark_layout(),
                    ...{
                      title: "g(x)",
                      margin: default_margin(),
                      dragmode: false,
                    },
                  }
            }
            config={default_config()}
          />
        </Box>
        <Box fill>
          <Plot
            data={[
              {
                x: props.results.c.x,
                y: props.results.c.y,
                type: "scattergl",
                mode: "lines",
                marker: { color: "green" },
              },
            ]}
            style={{ width: "100%", height: "100%" }}
            useResizeHandler={true}
            layout={
              !props.darkMode
                ? {
                    title: "(f*g)(x)",
                    margin: default_margin(),
                    dragmode: false,
                  }
                : {
                    ...dark_layout(),
                    ...{
                      title: "(f*g)(x)",
                      margin: default_margin(),
                      dragmode: false,
                    },
                  }
            }
            config={default_config()}
          />
        </Box>
      </Box>
      <Box
        fill={"horizontal"}
        height={"60px"}
        background={"bar_body"}
        align="center"
        border={{
          side: "bottom",
          color: "bar_accent",
          size: "2px",
        }}
      >
        <div>
          <Latex>$(f*g)(x)=\int f(\tau)g(x-\tau)d\tau$</Latex>
        </div>
      </Box>
      <Box fill pad="xsmall">
        <Plot
          data={builtTraces}
          style={{ width: "100%", height: "100%" }}
          useResizeHandler={true}
          layout={
            !props.darkMode
              ? {
                  margin: {
                    t: 10,
                    l: 50,
                    r: 20,
                    b: 20,
                  },
                  showlegend: false,
                }
              : {
                  ...dark_layout(),
                  ...{
                    margin: {
                      t: 10,
                      l: 50,
                      r: 20,
                      b: 20,
                    },
                  },
                }
          }
          config={default_config()}
        />
        <Box
          align="center"
          pad="xsmall"
          background={"time_bar"}
          border={{
            side: "all",
            size: "2px",
            color: "bar_accent",
          }}
          style={{ marginBottom: "10", height: 45, minHeight: 45 }}
        >
          <Box direction="row" fill justify="center" align="center">
            <Button
              hoverIndicator
              icon={<ChapterPrevious />}
              size="small"
              onClick={() => {
                props.updateTau(1);
              }}
            />
            <Button
              hoverIndicator
              icon={<Rewind />}
              size="small"
              onClick={() => {
                if (props.tau - STEP_SIZE <= 0) {
                  props.updateTau(1);
                } else {
                  props.updateTau(props.tau - STEP_SIZE);
                }
              }}
            />
            <RangeInput
              value={props.tau}
              min={1}
              max={props.input.cardinality - 1}
              onChange={(e) => {
                props.updateTau(+e.target.value);
              }}
              color={"blue"}
            />
            <Button
              hoverIndicator
              icon={<FastForward />}
              size="small"
              onClick={() => {
                if (props.tau + STEP_SIZE >= props.input.cardinality) {
                  props.updateTau(props.input.cardinality - 1);
                } else {
                  props.updateTau(props.tau + STEP_SIZE);
                }
              }}
            />
            <Button
              hoverIndicator
              icon={<ChapterNext />}
              size="small"
              onClick={() => {
                props.updateTau(props.input.cardinality - 1);
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
