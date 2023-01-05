import React, { useState } from "react";
import "./common.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import { Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header() {
  const [checked, setChecked] = useState();
  const handleDarkMode = (e) => {
    e
      ? document.body.setAttribute("id", "darkTheam")
      : document.body.removeAttribute("id");
  };
  return (
    <div id="header_div">
      <div>
        <Link className="darkTheme_link" to="/">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}>
            AwesomeStore
          </Typography>
        </Link>
      </div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Switch
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          handleDarkMode(event.target.checked);
        }}
      />
      <div className="header_nav_div">
        <div>
          <Link className="darkTheme_link" to="/products">
            Products
          </Link>
        </div>
        <div>
          <Link className="darkTheme_link" to="/about">
            About
          </Link>
        </div>
        <div>
          <Link className="darkTheme_link" to="/contact-us">
            ContactUs
          </Link>
        </div>
        <div>
          <Link className="darkTheme_link" to="/login-or-registration">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
