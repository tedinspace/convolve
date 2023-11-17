import React, { Component } from "react";
import { Box } from "grommet";
import { IEvaluation, IScenarioInput } from ".";
import { LeftMenu } from "./menu/LeftMenu";
import { defaultInput } from "../functions/zoo";
import { runAllFunctionEvaluations } from "../functions/evaluation";
import { PlotGrid } from "./PlotGrid";

interface IProps {
  darkMode: boolean;
}
interface IState {
  input: IScenarioInput;
  results: IEvaluation;
  tau: number;
}
class RootLayout extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      input: defaultInput(),
      results: runAllFunctionEvaluations(defaultInput()),
      tau: 1,
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
        <PlotGrid
          {...this.state}
          darkMode={this.props.darkMode}
          updateTau={(t) => {
            this.setState({ tau: t });
          }}
        />
      </Box>
    );
  }
}

export default RootLayout;
