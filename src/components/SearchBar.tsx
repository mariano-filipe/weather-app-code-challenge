import {
  Box,
  IconButton,
  Input,
  InputBase,
  makeStyles,
  Paper,
  Typography,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useState } from "react";

interface SearchBarProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchCity: string;
  setSearchCity: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSubmit,
  onChange,
  searchCity,
  setSearchCity,
}) => {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      onSubmit={onSubmit}
    >
      <InputBase
        placeholder="Informe a cidade"
        sx={{ ml: 1, flex: 1 }}
        value={searchCity}
        onChange={onChange}
        inputProps={{ "aria-label": "teste" }}
        endAdornment={
          <IconButton type="submit" disabled={!searchCity}>
            <SearchOutlinedIcon />
          </IconButton>
        }
      />
    </Paper>
  );
};

export default SearchBar;
