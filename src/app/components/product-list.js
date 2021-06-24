import { Container, Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./list-item";
import ListItemSkeleton from "./list-item-skeleton";

const ProductList = ({ items }) => {
  const isLoading = useSelector((state) => state.UIReducer.isLoading);
  const renderSkeleton = (
    <div style={{ marginTop: 100 }}>
      <Container>
        <Grid container spacing={5}>
          {Array(10)
            .fill({})
            .map((item) => (
              <Grid item>
                <ListItemSkeleton />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
  if (isLoading) {
    return renderSkeleton;
  }
  return (
    <div style={{ marginTop: 100 }}>
      <Container>
        <Grid container spacing={5}>
          {items &&
            items.map((item, index) => {
              return (
                <Grid item key={item.id}>
                  <ListItem item={item} key={item.id} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </div>
  );
};

export default ProductList;
