import { Accordion, AccordionPanel, Box } from "grommet";
import { IScenarioInput } from "../..";
const Latex = require("react-latex");

interface IProps {

  updateInput(input: IScenarioInput): void;
}
export function ExamplesTab(props: IProps) {
  return <Box>
      <Accordion multiple>
      <AccordionPanel label="1. Two Unit Squares">
        <Box  overflow="auto" height="medium">
        <Latex>$f(x)=1, x\in[0,1]$</Latex>
        <Latex>$g(x)=1, x\in[0,1]$</Latex>
        <Latex>$g(x -\tau )=1, x\in[-1,0]$</Latex>
        </Box>
      </AccordionPanel>
      <AccordionPanel label="Panel 2">
        <Box background="light-2" style={{ height: '50px' }}>
          Panel 2 contents
        </Box>
      </AccordionPanel>
      <AccordionPanel label="Panel 3">
        <Box background="light-2" style={{ height: '300px' }}>
          Panel 3 contents
        </Box>
      </AccordionPanel>
    </Accordion>
  </Box>;
}
