import React from "react";
import { ThemeProvider } from "styled-components";
import { THEME } from "../theme";

type Props = {
  children: React.ReactNode;
}

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={THEME}>
    {children}
  </ThemeProvider>
)

export default Theme
