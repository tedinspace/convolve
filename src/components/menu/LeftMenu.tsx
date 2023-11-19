import React from "react";
import { IScenarioInput } from "..";
import { Box, Tab, Tabs } from "grommet";
import { Services, HelpBook, Catalog } from "grommet-icons";
import { InputTab } from "./tabs/InputTab";
import { HelpTab } from "./tabs/HelpTab";
import { ExamplesTab } from "./tabs/ExamplesTab";
interface IProps {
  input: IScenarioInput;
  updateInput(input: IScenarioInput): void;
}
export function LeftMenu(props: IProps) {
  return (
    <Box
      style={{
        width: 600,
      }}
      fill
      pad="medium"
      elevation="small"
      border={{ color: "bar_accent", size: "2px", side: "right" }}
    >
      <Tabs flex >
        <Tab title="Input" icon={<Services />}>
          <InputTab {...props} />
        </Tab>
        <Tab title="Examples" icon={<Catalog />}>
          <ExamplesTab updateInput={props.updateInput} />
        </Tab>
        <Tab title="Function Guide" icon={<HelpBook />}>
          <HelpTab />
        </Tab>
      </Tabs>
    </Box>
  );
}
