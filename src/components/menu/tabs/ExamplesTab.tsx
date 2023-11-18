import { Accordion, AccordionPanel, Box, Button, Text } from "grommet";
import { IScenarioInput } from "../..";
import {
  rectanguleWidth2,
  rightTriangle,
  symmetricTriangle,
  unitSquare,
} from "../../../functions/zoo";
import { Info } from "grommet-icons";
const Latex = require("react-latex");

interface IProps {
  updateInput(input: IScenarioInput): void;
}
export function ExamplesTab(props: IProps) {
  return (
    <Box>
      <Accordion>
        <AccordionPanel label="1. Two Unit Squares">
          <Latex>$f(x)=1, x\in[0,1]$</Latex>
          <Latex>$g(x)=1, x\in[0,1]$</Latex>
          <Box width={"225px"} style={{ paddingTop: 15, paddingBottom: 15 }}>
            <Button
              pad={"none"}
              label="load scenario"
              hoverIndicator
              fill="horizontal"
              color="time_bar"
              onClick={() => {
                props.updateInput({
                  xRangeMin: -5,
                  xRangeMax: 5,
                  cardinality: 750,
                  fFunc: [unitSquare()],
                  gFunc: [unitSquare()],
                });
              }}
            />
          </Box>
        </AccordionPanel>
        <AccordionPanel label="2. Two Rectangular Pulses">
          <Latex>$f(x)=1, x\in[0,1]$</Latex>
          <Latex>$g(x)=1/2, x\in[-1,1]$</Latex>
          <Box width={"225px"} style={{ paddingTop: 15, paddingBottom: 15 }}>
            <Button
              pad={"none"}
              label="load scenario"
              hoverIndicator
              fill="horizontal"
              color="time_bar"
              onClick={() => {
                props.updateInput({
                  xRangeMin: -5,
                  xRangeMax: 5,
                  cardinality: 750,
                  fFunc: [unitSquare()],
                  gFunc: [rectanguleWidth2()],
                });
              }}
            />
          </Box>
        </AccordionPanel>
        <AccordionPanel
          label={"3. Unit Square with Exponential Distribution (λ=1)"}
        >
          <Box direction="row">
            <Latex>{"$f(x)=e^{-x}$"}</Latex>
            <Latex>$, x\in[-1,\infty ]$ **</Latex>
          </Box>
          <Latex>$g(x)=1, x\in[0,1]$</Latex>
          <Box width={"225px"} style={{ paddingTop: 15, paddingBottom: 15 }}>
            <Button
              pad={"none"}
              label="load scenario"
              hoverIndicator
              fill="horizontal"
              color="time_bar"
              onClick={() => {
                props.updateInput({
                  xRangeMin: -2,
                  xRangeMax: 6,
                  cardinality: 750,
                  fFunc: [
                    {
                      func: "e^(-x)",
                      enforceRange: true,
                      rangeMin: -1,
                      rangeMax: 6,
                    },
                  ],
                  gFunc: [unitSquare()],
                });
              }}
            />
          </Box>
        </AccordionPanel>
        <AccordionPanel label={"4. Two Unit Step Functions"}>
          <Latex>$f(x)=1, x\in[0,\infty]$ **</Latex>
          <Latex>$g(x)=1, x\in[0,\infty]$ **</Latex>
          <Box width={"225px"} style={{ paddingTop: 15, paddingBottom: 15 }}>
            <Button
              pad={"none"}
              label="load scenario"
              hoverIndicator
              fill="horizontal"
              color="time_bar"
              onClick={() => {
                props.updateInput({
                  xRangeMin: -5,
                  xRangeMax: 5,
                  cardinality: 750,
                  fFunc: [
                    {
                      func: "1",
                      enforceRange: true,
                      rangeMin: 0,
                      rangeMax: 5,
                    },
                  ],
                  gFunc: [
                    {
                      func: "1",
                      enforceRange: true,
                      rangeMin: 0,
                      rangeMax: 10,
                    },
                  ],
                });
              }}
            />
            <br />
            <StepByStepSolution link="https://www.youtube.com/watch?v=iAuVYJLjsII" />
          </Box>
        </AccordionPanel>
        <AccordionPanel label={"5. Two Polynomials"}>
          <Latex>$f(x)=x^3, x\in[0,\infty]$ **</Latex>
          <Latex>$g(x)=x^2, x\in[0,\infty]$ **</Latex>
          <Box width={"225px"} style={{ paddingTop: 15, paddingBottom: 15 }}>
            <Button
              pad={"none"}
              label="load scenario"
              hoverIndicator
              fill="horizontal"
              color="time_bar"
              onClick={() => {
                props.updateInput({
                  xRangeMin: -5,
                  xRangeMax: 5,
                  cardinality: 750,
                  fFunc: [
                    {
                      func: "x^3",
                      enforceRange: true,
                      rangeMin: 0,
                      rangeMax: 5,
                    },
                  ],
                  gFunc: [
                    {
                      func: "x^2",
                      enforceRange: true,
                      rangeMin: 0,
                      rangeMax: 10,
                    },
                  ],
                });
              }}
            />
            <br />
            <StepByStepSolution link="https://www.youtube.com/watch?v=e0Sy_l5boh0" />
          </Box>
        </AccordionPanel>
        <AccordionPanel label={"6. Two Triangles"}>
          <Latex>$f(x)= -|x|+1, x\in[-1,1]$</Latex>
          <Latex>$g(x)= -|x|+1, x\in[-1,1]$</Latex>
          <Box width={"225px"} style={{ paddingTop: 15, paddingBottom: 15 }}>
            <Button
              pad={"none"}
              label="load scenario"
              hoverIndicator
              fill="horizontal"
              color="time_bar"
              onClick={() => {
                props.updateInput({
                  xRangeMin: -5,
                  xRangeMax: 5,
                  cardinality: 750,
                  fFunc: [symmetricTriangle()],
                  gFunc: [symmetricTriangle()],
                });
              }}
            />
            <br />
            <StepByStepSolution link="https://www.youtube.com/watch?v=35gc3GE4Ddo" />
          </Box>
        </AccordionPanel>
        <AccordionPanel label={"7. Unit Step and Unit Square"}>
          <Latex>$f(x)=1, x\in[0,\infty]$ **</Latex>
          <Latex>$g(x)= 1, x\in[0,1]$</Latex>
          <Box width={"225px"} style={{ paddingTop: 15, paddingBottom: 15 }}>
            <Button
              pad={"none"}
              label="load scenario"
              hoverIndicator
              fill="horizontal"
              color="time_bar"
              onClick={() => {
                props.updateInput({
                  xRangeMin: -5,
                  xRangeMax: 5,
                  cardinality: 750,
                  fFunc: [
                    {
                      func: "1",
                      enforceRange: true,
                      rangeMin: 0,
                      rangeMax: 5,
                    },
                  ],
                  gFunc: [unitSquare()],
                });
              }}
            />
            <br />
            <StepByStepSolution link="https://www.youtube.com/watch?v=r40Zdwsf1ds" />
          </Box>
        </AccordionPanel>
        <AccordionPanel label={"8. Unit Square and Right Triangle"}>
          <Latex>$f(x)=1, x\in[0,1]$</Latex>
          <Latex>$g(x)= -x+1, x\in[0,1]$</Latex>
          <Box width={"225px"} style={{ paddingTop: 15, paddingBottom: 15 }}>
            <Button
              pad={"none"}
              label="load scenario"
              hoverIndicator
              fill="horizontal"
              color="time_bar"
              onClick={() => {
                props.updateInput({
                  xRangeMin: -5,
                  xRangeMax: 5,
                  cardinality: 750,
                  fFunc: [unitSquare()],
                  gFunc: [rightTriangle()],
                });
              }}
            />
          </Box>
        </AccordionPanel>
        <AccordionPanel label={"9. Two Exponential Distributions"}>
          <Box direction="row">
            <Latex>{"$f(x)=e^{-x}$"}</Latex>
            <Latex>$, x\in[0,\infty ]$ **</Latex>
          </Box>
          <Box direction="row">
            <Latex>{"$f(x)=e^{-x/2}/2$"}</Latex>
            <Latex>$, x\in[0,\infty ]$ **</Latex>
          </Box>
          <Box width={"225px"} style={{ paddingTop: 15, paddingBottom: 15 }}>
            <Button
              pad={"none"}
              label="load scenario"
              hoverIndicator
              fill="horizontal"
              color="time_bar"
              onClick={() => {
                props.updateInput({
                  xRangeMin: -5,
                  xRangeMax: 10,
                  cardinality: 750,
                  fFunc: [
                    {
                      func: "e^(-x)",
                      enforceRange: true,
                      rangeMin: 0,
                      rangeMax: 10,
                    },
                  ],
                  gFunc: [
                    {
                      func: "e^(-x/2)/2",
                      enforceRange: true,
                      rangeMin: 0,
                      rangeMax: 15,
                    },
                  ],
                });
              }}
            />
          </Box>
        </AccordionPanel>
        <AccordionPanel label={"10. Signum with Triangle"}>
          <Box direction="row">
            <Latex>{"$f(x)=sgn(x)$"}</Latex>
            <Latex>$, x\in[-5,5 ]$</Latex>
          </Box>

          <Latex>$g(x)= 1, x\in[0,1]$</Latex>
          <br />
          <i>
            Note: Convolution with an infinite signum function looks like the
            (f*g)(x) results on [-4,4]
          </i>
          <Box width={"225px"} style={{ paddingTop: 15, paddingBottom: 15 }}>
            <Button
              pad={"none"}
              label="load scenario"
              hoverIndicator
              fill="horizontal"
              color="time_bar"
              onClick={() => {
                props.updateInput({
                  xRangeMin: -5,
                  xRangeMax: 5,
                  cardinality: 750,
                  fFunc: [
                    {
                      func: "-1",
                      enforceRange: true,
                      rangeMin: -5,
                      rangeMax: 0,
                    },
                    {
                      func: "1",
                      enforceRange: true,
                      rangeMin: 0,
                      rangeMax: 5,
                    },
                  ],
                  gFunc: [symmetricTriangle()],
                });
              }}
            />
          </Box>
        </AccordionPanel>
        <AccordionPanel label={"11. Sinc with Rectangle"}>
          <Box direction="row">
            <Latex>{"$f(x)=sinc(x)$"}</Latex>
            <Latex>$, x\in[-5,5 ]$</Latex>
          </Box>

          <Latex>$g(x)= 1/6, x\in[-3,3]$</Latex>
         
          <Box width={"225px"} style={{ paddingTop: 15, paddingBottom: 15 }}>
            <Button
              pad={"none"}
              label="load scenario"
              hoverIndicator
              fill="horizontal"
              color="time_bar"
              onClick={() => {
                props.updateInput({
                  xRangeMin: -5,
                  xRangeMax: 5,
                  cardinality: 750,
                  fFunc: [
                    {
                      func: "sin(pi*x)/(pi*x)",
                      enforceRange: true,
                      rangeMin: -5,
                      rangeMax: 5,
                    },
                 
                  ],
                  gFunc: [   {
                    func: "1/6",
                    enforceRange: true,
                    rangeMin: -3,
                    rangeMax: 3,
                  },],
                });
              }}
            />
          </Box>
        </AccordionPanel>
      </Accordion>
      <Text color={"orange"}>
        <i>
          ** Only evaluates functions between the min and max ranges; you can
          (usually) mimic behavior of infinite functions by setting the range of
          g(x) strategically relative to scenario's [min,max].
        </i>
      </Text>
    </Box>
  );
}

const StepByStepSolution = (props: { link: string }) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <Info size="medium" color="orange" />
      step-by-step solution
    </a>
  );
};
