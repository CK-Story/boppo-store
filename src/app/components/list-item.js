import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  capitalize,
  Grid,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import { useHistory, useRouteMatch } from "react-router-dom";
import { addToCart, incrementQuantity } from "../actions/cart.actions";
import { useDispatch, useSelector } from "react-redux";
import ListItemActionButtons from "./list-item-buttons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: 500,
    padding: theme.spacing(1.5),
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: 280,
    "&:hover": {
      cursor: "pointer",
    },
  },
  cover: {
    width: 200,
    height: 200,
    padding: 10,
  },
}));

export default function ListItem(itemDetails) {
  const dispatch = useDispatch();
  let history = useHistory();
  const { path } = useRouteMatch();
  const classes = useStyles();
  const CartReducer = useSelector((state) => state.CartReducer);

  return (
    <Card className={classes.root}>
      <Grid container spacing={1}>
        <Grid item>
          <div
            style={{
              backgroundImage: `url(${itemDetails.item.image})`,
              height: 160,
              width: 180,
              backgroundSize: "contain",
              backgroundPosition: "center",
              padding: 15,
              backgroundOrigin: "border-box",
              backgroundRepeat: "no-repeat",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Grid>
        <Grid item>
          <div className={classes.details}>
            <div onClick={() => history.push(`${path}/${itemDetails.item.id}`)}>
              <Typography variant="caption" noWrap>
                {capitalize(itemDetails.item.category)}
              </Typography>
              <Typography variant="h6" noWrap>
                {itemDetails.item.title}
              </Typography>
              <span
                style={{
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                <Typography variant="body2">
                  {itemDetails.item.description}
                </Typography>
              </span>
              <Typography variant="h6">₹ {itemDetails.item.price}</Typography>
            </div>
            <ListItemActionButtons itemDetails={itemDetails.item} />
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}
