import { Accordion, AccordionPanel, Box, Button, Text } from "grommet";
import { IScenarioInput } from "../..";
import {
  defaultInput,
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
    <Box overflow={"auto"} fill>
      <div>
        <Accordion>
          <AccordionPanel label="0. Two Right Triangles (default)">
            <div className="sol">f(x) = x + 1, x ∈ [-1,0]</div>
            <div className="sol">g(x) = -x + 1, x ∈ [0,1]</div>
            <Box width={"225px"} style={{ paddingTop: 15, paddingBottom: 15 }}>
              <Button
                pad={"none"}
                label="load scenario"
                hoverIndicator
                fill="horizontal"
                color="time_bar"
                onClick={() => {
                  props.updateInput(defaultInput());
                }}
              />
            </Box>
            <br />
            <Text color="orange">
              <Info size="medium" color="orange" />
              Analytical Solution
            </Text>
            <Box border={{ color: "orange", size: "2px" }}>
              <ol className="solution">
                <li>
                  <div className="sol">{"x < −1"}</div>
                  <br />
                  <Latex>
                    {"$∫^{-1}_{-∞} f(τ)g(x-τ) dτ= ∫^{-1}_{-∞} 0 dτ=0$"}
                  </Latex>
                </li>
                <li>
                  <div className="sol">{"x ∈ [−1,0]"}</div>
                  <br />
                  <Latex>
                    {"$∫^{x}_{-1} f(τ)g(x-τ) dτ = ∫^{x}_{-1}  (τ+1)^2  dτ$"}
                  </Latex>
                  <br />
                  <Latex>$=(x+1)^3/3$</Latex>
                </li>
                <li>
                  <div className="sol">{"x ∈ [0,1]"}</div>
                  <br />
                  <Latex>
                    {"$∫^{1}_{x}f(τ)g(x-τ) dτ = ∫^{1}_{x} (1-τ)^2  dτ$"}
                  </Latex>
                  <br />
                  <Latex>$=-(x-1)^3/3$</Latex>
                </li>
                <li>
                  <div className="sol">{"x > 1"}</div>
                  <br />
                  <Latex>{"$∫^{∞}_{1} f(τ)g(x-τ) dτ= ∫^{∞}_{1} 0 dτ=0$"}</Latex>
                </li>
              </ol>
            </Box>
          </AccordionPanel>
          <AccordionPanel label="1. Two Unit Squares">
            <div className="sol">f(x) = 1, x ∈ [0,1]</div>
            <div className="sol">g(x) = 1, x ∈ [0,1]</div>
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
            <br />
            <Text color="orange">
              <Info size="medium" color="orange" />
              Analytical Solution
            </Text>
            <Box border={{ color: "orange", size: "2px" }}>
              <ol className="solution">
                <li>
                  <Latex>{"$x<0$"}</Latex>
                  <br /> <Latex>{"$(f*g)(x) =0$"}</Latex>
                </li>
                <li>
                  <Latex>$x \in [0,1]$</Latex>
                  <br />
                  <Latex>{"$∫^{x}_{0}f(τ)g(x-τ) dτ = ∫^{x}_{0} 1 dτ$"}</Latex>
                  <br />
                  <Latex>$=x$</Latex>
                </li>
                <li>
                  <Latex>$x \in (1,2]$</Latex>
                  <br />
                  <Latex>{"$∫^{2}_{x}f(τ)g(x-τ) dτ = ∫^{2}_{x} 1 dτ$"}</Latex>
                  <br />
                  <Latex>$=2-x$</Latex>
                </li>
                <li>
                  <Latex>{"$x>2$"}</Latex>
                  <br /> <Latex>{"$(f*g)(x) =0$"}</Latex>
                </li>
              </ol>
            </Box>
          </AccordionPanel>
          <AccordionPanel label="2. Two Rectangular Pulses">
            <Latex>$f(x) = 1, x\in[0,1]$</Latex>
            <Latex>$g(x) = 1/2, x\in[-1,1]$</Latex>
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
            <br />
            <Text color="orange">
              <Info size="medium" color="orange" />
              Analytical Solution
            </Text>
            <Box border={{ color: "orange", size: "2px" }}>
              <ol className="solution">
                <li>
                  <div className="sol">{"x < 0"}</div>
                  <br />
                  <div className="sol">{"(f * g)(x)=0"}</div>
                </li>
                <li>
                  <div className="sol">{"x ∈ [0,1]"}</div>
                  <br />
                  <Latex>{"$∫^{x}_{0}f(τ)g(x-τ) dτ = ∫^{x}_{0} 1/2 dτ$"}</Latex>
                  <br />
                  <div className="sol">{"= x/2"}</div>
                </li>
                <li>
                <div className="sol">{"x ∈ [1,2]"}</div>
                  <br />
                  <Latex>{"$∫^{2}_{1}f(τ)g(x-τ) dτ = ∫^{2}_{1} 1/2 dτ$"}</Latex>
                  <br />
                  <div className="sol">{"= 1/2"}</div>
                </li>
                <li>
                <div className="sol">{"x ∈ [2,3]"}</div>
                <br />
                  <Latex>{"$∫^{3}_{x}f(τ)g(x-τ) dτ = ∫^{3}_{x} 1/2 dτ$"}</Latex>
                  <br />
                  <div className="sol">{"= (3 - x)/2"}</div>
                </li>
                <li>
                  <div className="sol">{"x > 3"}</div>
                  <br /> 
                  <div className="sol">{"(f * g)(x) = 0"}</div>
                </li>
              </ol>
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
            <div className="sol">f(x) = sgn(x), x ∈ [-5,5] </div>
            <div className="sol">g(x) = −∣x∣+1, x ∈ [−1,1] </div>
            
            <br />
            <Text color="orange">
              <i>
                Note: Convolution with an infinite signum function looks like
                the (f*g)(x) results on [-4,4]
              </i>
            </Text>
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
            <div className="sol">f(x) = sinc(x), x ∈ [-5,5] </div>
            <div className="sol">g(x) = 1/6, x ∈ [-3,3] </div>
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
                    gFunc: [
                      {
                        func: "1/6",
                        enforceRange: true,
                        rangeMin: -3,
                        rangeMax: 3,
                      },
                    ],
                  });
                }}
              />
            </Box>
          </AccordionPanel>
          <AccordionPanel label={"12. Sawtooth Wave with Triangle"}>
            <div className="sol">f(x) = ... piecewise</div>
            <div className="sol">g(x) = - |x| + 1, x ∈ [-1,1]</div>
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
                        func: "-x-2",
                        enforceRange: true,
                        rangeMin: -3,
                        rangeMax: -2,
                      },
                      {
                        func: "-x+1",
                        enforceRange: true,
                        rangeMin: 0,
                        rangeMax: 1,
                      },
                      {
                        func: "-x+4",
                        enforceRange: true,
                        rangeMin: 3,
                        rangeMax: 4,
                      },
                    ],
                    gFunc: [symmetricTriangle()],
                  });
                }}
              />
            </Box>
          </AccordionPanel>
          <AccordionPanel label={"13. Two Normal Distributions"}>
            <div className="sol">f(x) = A ~ N(0,1)</div>
            <div className="sol">g(x) = B ~ N(1.5,4)</div>

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
                    xRangeMax: 8,
                    cardinality: 750,
                    fFunc: [
                      {
                        func: "1/sqrt(2*pi)*exp(-x^2/2)",
                        enforceRange: false,
                        rangeMin: -5,
                        rangeMax: 8,
                      },
                    ],
                    gFunc: [
                      {
                        func: "1/(2*sqrt(2*pi))*exp(-(x-1.5)^2/8)",
                        enforceRange: false,
                        rangeMin: -5,
                        rangeMax: 8,
                      },
                    ],
                  });
                }}
              />
            </Box>
            <br />
            <Text color="orange">
              <Info size="medium" color="orange" />
              Solution
            </Text>
            <Box
              border={{ color: "orange", size: "2px" }}
              pad="small"
              
            >
              <a
                href="https://en.wikipedia.org/wiki/Sum_of_normally_distributed_random_variables"
                target="_blank"
                rel="noreferrer"
              >
                Use the linear property of Normal random variables
              </a>
              <br />
              <div className="sol">A + B = </div>
              <br />
              <div className="sol"> Z ~ N(0+1.5, 1+4)</div>
              <br />
              <div className="sol"> Z ~ N(1.5, 5)</div>
              <br />
              <a
                href="https://www.desmos.com/calculator/xgaf3jxbf5"
                target="_blank"
                rel="noreferrer"
              >
                TIP - use Desmos to verify
              </a>
            </Box>
            <br />
          </AccordionPanel>
        </Accordion>
      </div>
      <div>
        <Text color={"orange"}>
          <i>
            ** Only evaluates functions between the min and max ranges; you can
            (usually) mimic behavior of infinite functions by setting the range
            of g(x) strategically relative to scenario's [min,max].
          </i>
        </Text>
      </div>
    </Box>
  );
}

const StepByStepSolution = (props: { link: string }) => {
  return (
    <>
      <br />
      <a href={props.link} target="_blank" rel="noreferrer">
        <Info size="medium" color="orange" />
        step-by-step solution
      </a>
    </>
  );
};
