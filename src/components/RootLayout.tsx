import React, { Component } from "react";
import { Box } from "grommet";
import Plot from "react-plotly.js";
import { IEvaluation, IScenarioInput } from ".";
import { LeftMenu } from "./LeftMenu";
import { defaultInput } from "../functions/zoo";
import { runAllFunctionEvaluations } from "../functions/evaluation";

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
        <Box fill pad="medium">
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
        </Box>
      </Box>
    );
  }
}

export default RootLayout;
