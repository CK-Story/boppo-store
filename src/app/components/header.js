import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useAuthentication } from "../utils/authentication";
import { ExitToApp } from "@material-ui/icons";
import { getProducts } from "../actions/products.actions";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export default function Header() {
  const history = useHistory();
  const classes = useStyles();
  const CartReducer = useSelector((state) => state.CartReducer);
  const { isAuthenticated, logout } = useAuthentication();

  const menuId = "primary-search-account-menu";

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Boppo Store
          </Typography>
          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            {isAuthenticated ? (
              <>
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                  onClick={() => history.push("/cart")}
                >
                  <Badge
                    badgeContent={Object.keys(CartReducer.cart).length}
                    color="secondary"
                  >
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={() => {
                    logout();
                    history.push("login");
                  }}
                  color="inherit"
                >
                  <ExitToApp />
                </IconButton>
              </>
            ) : (
              <Button color="inherit" onClick={() => history.push("/login")}>
                <span>Login</span>
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
