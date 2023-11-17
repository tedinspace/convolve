import { Box, RangeInput } from "grommet";
import Plot from "react-plotly.js";
import { default_margin, default_config } from "../functions/plot";
import { partialConvolutionTrace, flippedGTrace } from "../functions/traces";
import { IEvaluation, IScenarioInput } from ".";
const Latex = require('react-latex');

interface IProps {
  darkMode: boolean;

  input: IScenarioInput;
  results: IEvaluation;
  tau: number;
  updateTau(tau: number): void;
}
export function PlotGrid(props: IProps) {
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
            layout={{
              title: "f(x)",
              margin: default_margin(),
              dragmode: false,
            }}
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
            layout={{
              title: "g(x)",
              margin: default_margin(),
              dragmode: false,
            }}
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
            layout={{
              title: "(f*g)(x)",
              margin: default_margin(),
              dragmode: false,
            }}
            config={default_config()}
          />
        </Box>
      </Box>
      <Box fill={'horizontal'} height={"60px"} background={"bar_body"} align="center"
      border={
        {
            side:"bottom",
            color:"bar_accent",
            size:"2px"
        }
      }
      >
       <div><Latex>$(f*g)(x)=\int f(\tau)g(x-\tau)d\tau$</Latex></div>
      </Box>
      <Box fill pad="xsmall">
        <Plot
          data={[
            {
              x: props.results.f.x,
              y: props.results.f.y,
              type: "scattergl",
              mode: "lines",
              marker: { color: "red" },
              line: {
                dash: "dot",
              },
            },
            partialConvolutionTrace(props.tau, props.results),
            flippedGTrace(props.tau, props.input, props.results),
          ]}
          style={{ width: "100%", height: "100%" }}
          useResizeHandler={true}
          layout={{
            margin: default_margin(),
            dragmode: false,
            showlegend: false,
          }}
          config={default_config()}
        />
        <Box align="center" pad="medium">
          <RangeInput
            value={props.tau}
            min={1}
            max={props.input.cardinality - 1}
            onChange={(e) => {
              props.updateTau(+e.target.value);
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
