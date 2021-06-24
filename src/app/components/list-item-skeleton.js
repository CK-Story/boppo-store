import React from "react";
import { Card, Grid, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: 500,
    padding: theme.spacing(1.5),
  },
}));
const ListItemSkeleton = () => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item>
          <Skeleton variant="rect" width={180} height={180} />
        </Grid>
        <Grid item>
          <Skeleton variant="text" width={220} height={60} />
          <Skeleton variant="text" width={220} />
          <Skeleton variant="text" width={220} />
          <Skeleton variant="text" width={220} />
          <Grid container spacing={3} alignItems="center" justify="center">
            <Grid item sm={6}>
              <Skeleton variant="text" width="100%" height={60} />
            </Grid>
            <Grid item sm={6}>
              <Skeleton variant="text" width="100%" height={60} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ListItemSkeleton;
