import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, CssBaseline, Typography } from "@mui/material";

export const App: React.FC = () => {
  return (
    <CssBaseline>
      <Box p={2}>
        <Typography variant="h1">TODO App</Typography>
      </Box>
    </CssBaseline>
  );
};
