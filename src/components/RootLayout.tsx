import { useMemo, useEffect, useState } from "react";
import { Box } from "grommet";
import { IEvaluation, IScenarioInput } from ".";
import { LeftMenu } from "./menu/LeftMenu";
import { defaultInput } from "../functions/zoo";
import { runAllFunctionEvaluations } from "../functions/evaluation";
import { PlotGrid } from "./PlotGrid";

interface IProps {
  darkMode: boolean;
}

export function RootLayout(props: IProps) {
  const [input, updateInput] = useState<IScenarioInput>(defaultInput());
  const [results, updateResults] = useState<IEvaluation>(
    runAllFunctionEvaluations(defaultInput())
  );
  const [tau, updateTau] = useState<number>(1);

  const evaluator: Worker = useMemo(
    () => new Worker(new URL("../workers/runFunctionEval.ts", import.meta.url)),
    []
  );

  useEffect(() => {
    if (window.Worker) {
      evaluator.onmessage = (e: MessageEvent<IEvaluation>) => {
        updateResults(e.data);
      };
    }
  }, [evaluator]);

  return (
    <Box fill direction="row">
      <LeftMenu
        input={input}
        updateInput={(i: IScenarioInput) => {
          updateInput(i);
          if (window.Worker) {
            evaluator.postMessage(i);
          }
        }}
      />
      <PlotGrid
        results={results}
        input={input}
        tau={tau}
        darkMode={props.darkMode}
        updateTau={(t) => {
          updateTau(t);
         
        }}
      />
    </Box>
  );
}
