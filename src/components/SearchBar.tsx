import { IconButton, InputBase, Paper } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useState } from "react";

interface SearchBarProps {
  searchCity: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSubmit,
  onChange,
  searchCity,
}) => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        minWidth: "40%",
      }}
      onSubmit={onSubmit}
    >
      <InputBase
        placeholder="Informe a cidade"
        sx={{ ml: 1, flex: 1 }}
        value={searchCity}
        onChange={onChange}
        inputProps={{ "aria-label": "searchBar" }}
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
