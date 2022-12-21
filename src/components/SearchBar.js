import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";

import { Box, styled, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { SearchContext } from "../contex/contexSearch";

const SearchBox = styled(Box)({
  display: "flex",
  width: "100%",
});

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigateTo = useNavigate();;
  const {setValue, value} = useContext(SearchContext)

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`/api/properties/busqueda/${searchValue}`)
      .then((res) => {
        setValue(res.data);
        navigateTo("/busqueda");
      })
      .catch((err) => {
        console.error(err);
        alert("La busqueda  falló");
      });
  };
  console.log(value);
  return (
    <>
      <form onSubmit={handleSubmit} style={{ width: "30%" }}>
        <SearchBox>
          <TextField
            id="full-width-text-field"
            value={searchValue}
            onChange={handleSearch}
            placeholder="Buscá tu próximo hogar..."
            size="small"
            variant="outlined"
            autoComplete="off"
            sx={{
              backgroundColor: "white",
              borderRadius: "16px",
              width: "100%",
            }}
            InputProps={{
              startAdornment: (
                <IconButton sx={{ color: "#ed7203" }} type="submit">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          ></TextField>
        </SearchBox>
      </form>
    </>
  );
};

export default SearchBar;
