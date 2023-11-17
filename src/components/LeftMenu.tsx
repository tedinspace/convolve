import React from "react";
import { IScenarioInput } from ".";
import { Box, Tab, Tabs} from "grommet";
import {
  Services,
  HelpBook,
  Catalog,
} from "grommet-icons";
import { InputTab } from "./InputTab";
import { ExamplesTab } from "./ExamplesTab";
interface IProps {
  input: IScenarioInput;
  updateInput(input: IScenarioInput): void;
}
export function LeftMenu(props: IProps) {
  return (
    <Box
      style={{
        width: 500,
      }}
      fill
      pad="medium"
      elevation="small"
      border={{ color: "bar_accent", size: "2px", side: "right" }}
    >
      <Tabs>
      <Tab title="Examples" icon={<Catalog />}>
          <ExamplesTab/>
        </Tab>
        <Tab title="Input" icon={<Services />}>
          <InputTab input={props.input} updateInput={props.updateInput} />
        </Tab>
       
        <Tab title="Usage Guide" icon={<HelpBook />}>
          <Box margin="small">Function Tips</Box>
        </Tab>
      </Tabs>
    </Box>
  );
}
