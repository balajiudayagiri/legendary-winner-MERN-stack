import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Switch,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { setUserInfo } from "../store/actions/actions";
import "./common.css";
import { cart_item } from "../services/API";

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

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Header() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userReducer);
  const [cartCount, setCartCount] = useState(0);
  const cartList = useSelector((state) => state.add_to_cart_Reducer.cart);
  const [checked, setChecked] = useState();
  useEffect(() => {
    setCartCount(cartList.length);
    console.log(cartList);
  }, [cartList]);
  // console.log(cartList);
  const handleDarkMode = (e) => {
    e
      ? document.body.setAttribute("id", "darkTheam")
      : document.body.removeAttribute("id");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    dispatch(setUserInfo({}));
    localStorage.clear();
    handleClose();
  };
  const handleCartIcon = () => {
    // dispatch(cart_item());
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
          {userInfo.token ? (
            <Link className="darkTheme_link" to="/products">
              <div>Products</div>
            </Link>
          ) : (
            <Link to="/sales">
              <div>Sales</div>
            </Link>
          )}
        </div>
        <div>
          <Link className="darkTheme_link" to="/about">
            <div>About</div>
          </Link>
        </div>
        <div>
          <Link className="darkTheme_link" to="/contact-us">
            <div>ContactUs</div>
          </Link>
        </div>
        {!userInfo.token ? (
          <div>
            <Link className="darkTheme_link" to="/sign-in">
              <div>Login</div>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/cart">
              <IconButton aria-label="cart" onClick={handleCartIcon}>
                <StyledBadge badgeContent={cartCount} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ margin: 0 }}>
              <Avatar>
                {userInfo.firstName.charAt(0).toUpperCase()}
                {userInfo.lastName.charAt(0).toUpperCase()}
              </Avatar>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleLogOut}>Logout</MenuItem>
            </Menu>
          </>
        )}
      </div>
    </div>
  );
}
