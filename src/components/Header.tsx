import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="20px"
    >
      <Typography variant="h4">Previsão do tempo</Typography>
    </Box>
  );
};

export default Header;
