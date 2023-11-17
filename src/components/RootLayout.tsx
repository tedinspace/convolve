import React, { Component } from "react";
import { Box } from "grommet";
import Plot from "react-plotly.js";
import { IEvaluation, IScenarioInput } from ".";
import { LeftMenu } from "./LeftMenu";
import { defaultInput } from "../functions/zoo";
import { runAllFunctionEvaluations } from "../functions/evaluation";
import { default_config, default_margin } from "../functions/plot";

interface IProps {
  darkMode: boolean;
}
interface IState {
  input: IScenarioInput;
  results: IEvaluation;
}
class RootLayout extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      input: defaultInput(),
      results: runAllFunctionEvaluations(defaultInput()),
    };
  }

  render() {
    return (
      <Box fill direction="row">
        <LeftMenu
          input={this.state.input}
          updateInput={(i: IScenarioInput) => {
            this.setState({
              input: i,
              results: runAllFunctionEvaluations(i),
            });
          }}
        />
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
                    x: this.state.results.f.x,
                    y: this.state.results.f.y,
                    type: "scatter",
                    mode: "lines",
                    marker: { color: "red" },
                  },
                ]}
                style={{ width: "100%", height: "50%" }}
                useResizeHandler={true}
                layout={{
                  title: "f(x)",
                  margin: default_margin(),
                  dragmode:'select'
                }}
                config={default_config()}

              />
              <Plot
                data={[
                  {
                    x: this.state.results.g.x,
                    y: this.state.results.g.y,
                    type: "scatter",
                    mode: "lines",
                    marker: { color: "blue" },
                  },
                ]}
                style={{ width: "100%", height: "50%" }}
                useResizeHandler={true}
                layout={{
                  title: "g(x)",
                  margin: default_margin(),
                  dragmode:'select'
                }}
                config={default_config()}

              />
            </Box>
            <Box fill>
              <Plot
                data={[
                  {
                    x: this.state.results.c.x,
                    y: this.state.results.c.y,
                    type: "scatter",
                    mode: "lines",
                    marker: { color: "green" },
                  },
                ]}
                style={{ width: "100%", height: "100%" }}
                useResizeHandler={true}
                layout={{
                  title: "(f*g)(x)",
                  margin: default_margin(),
                  dragmode:'select'
                }}
                config={default_config()}
              />
            </Box>
          </Box>
          <Box fill></Box>
        </Box>
      </Box>
    );
  }
}

export default RootLayout;

/*
  <Plot
            data={[
              {
                x: this.state.results.f.x,
                y: this.state.results.f.y,
                type: "scatter",
                mode: "lines",
                marker: { color: "red" },
              },
            ]}
            style={{ width: "100%", height: "33%" }}
            useResizeHandler={true}
            layout={{
              // width: 800, height: 600
              margin: {
                t: 20, //top margin
                l: 20, //left margin
                r: 20, //right margin
                b: 20, //bottom margin
              },
            }}
          />

          <Plot
            data={[
              {
                x: this.state.results.g.x,
                y: this.state.results.g.y,
                type: "scatter",
                mode: "lines",
                marker: { color: "blue" },
              },
            ]}
            style={{ width: "100%", height: "33%" }}
            useResizeHandler={true}
            layout={{
              // width: 800, height: 600
              margin: {
                t: 20, //top margin
                l: 20, //left margin
                r: 20, //right margin
                b: 20, //bottom margin
              },
            }}
          />
          <Plot
            data={[
              {
                x: this.state.results.c.x,
                y: this.state.results.c.y,
                type: "scatter",
                mode: "lines",
                marker: { color: "green" },
              },
            ]}
            style={{ width: "100%", height: "33%" }}
            useResizeHandler={true}
            layout={{
              // width: 800, height: 600
              margin: {
                t: 20, //top margin
                l: 20, //left margin
                r: 20, //right margin
                b: 20, //bottom margin
              },
            }}
          />
*/
