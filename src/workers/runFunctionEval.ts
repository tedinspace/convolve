import { IScenarioInput } from "../components";
import { runAllFunctionEvaluations } from "../functions/evaluation";

/* eslint-disable-next-line no-restricted-globals */
self.onmessage = (e: MessageEvent<IScenarioInput>) => {
  try {
    /* eslint-disable-next-line no-restricted-globals */
    self.postMessage(runAllFunctionEvaluations(e.data));
  } catch (e) {
    /* eslint-disable-next-line no-restricted-globals */
    self.postMessage({
      f: { x: [], y: [] },
      g: { x: [], y: [] },
      c: { x: [], y: [] },
    });
  }
};

export {};
