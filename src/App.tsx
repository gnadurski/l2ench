import React, { ReactElement } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
