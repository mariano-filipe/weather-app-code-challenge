import { AppBar, Toolbar, Typography } from "@mui/material";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";

const Header = () => {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar variant="dense" sx={{ gap: 5 }}>
        <NightsStayOutlinedIcon fontSize="large" />
        <Typography variant="h5">Weather Forecast</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
