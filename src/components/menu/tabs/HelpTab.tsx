import { Box, Table, TableBody, TableRow, TableCell, Button } from "grommet";
import { Copy } from "grommet-icons";
import { copy } from "../../../functions/clipboard";
const Latex = require("react-latex");

export function HelpTab() {
  return (
    <Box fill overflow={"auto"} alignSelf="center">
      <Box align="center">
        <Box  pad={{ top: "xsmall" }} margin={{top:"medium"}}>
          <Table caption="Useful Arithmetic Functions">
            <TableBody>
              <TableRow>
                <TableCell>
                  <Latex>$|x|$</Latex>
                </TableCell>
                <TableCell>abs(x)</TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      copy("abs(x)");
                    }}
                    hoverIndicator
                    icon={<Copy />}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Latex>$\sqrt x$</Latex>
                </TableCell>
                <TableCell>sqrt(x)</TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      copy("sqrt(x)");
                    }}
                    hoverIndicator
                    icon={<Copy />}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Latex>$\sqrt[3] x$</Latex>
                </TableCell>
                <TableCell>cbrt(x)</TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      copy("cbrt(x)");
                    }}
                    hoverIndicator
                    icon={<Copy />}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Latex>$\sqrt[4] x$</Latex>
                </TableCell>
                <TableCell>x^(1/4)</TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      copy("x^(1/4");
                    }}
                    hoverIndicator
                    icon={<Copy />}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Latex>$e^x$</Latex>
                </TableCell>
                <TableCell>exp(x)</TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      copy("exp(x)");
                    }}
                    hoverIndicator
                    icon={<Copy />}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
            <TableRow>
              <TableCell>
                <Latex>$ln(x)$</Latex>
              </TableCell>
              <TableCell>log(x)</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    copy("log(x)");
                  }}
                  hoverIndicator
                  icon={<Copy />}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Latex>$log_2(x)$</Latex>
              </TableCell>
              <TableCell>log2(x)</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    copy("log2(x)");
                  }}
                  hoverIndicator
                  icon={<Copy />}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Latex>{"$log_{10}(x)$"}</Latex>
              </TableCell>
              <TableCell>log10(x)</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    copy("log10(x)");
                  }}
                  hoverIndicator
                  icon={<Copy />}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Latex>$\lceil x \rceil$</Latex>
              </TableCell>
              <TableCell>ceil(x)</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    copy("ceil(x)");
                  }}
                  hoverIndicator
                  icon={<Copy />}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Latex>$\lfloor x \rfloor$</Latex>
              </TableCell>
              <TableCell>floor(x)</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    copy("floor(x)");
                  }}
                  hoverIndicator
                  icon={<Copy />}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Latex>$x\% 3 $</Latex>
              </TableCell>
              <TableCell>mod(x,3)</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    copy("mod(x,3)");
                  }}
                  hoverIndicator
                  icon={<Copy />}
                />
              </TableCell>
            </TableRow>
          </Table>
        </Box>
      </Box>
    </Box>
  );
}
