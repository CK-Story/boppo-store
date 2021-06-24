import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/products.actions";
import ProductList from "../components/product-list";

const ProductsContainer = () => {
  const [Items, setItems] = useState([]);
  const dispatch = useDispatch();
  const ProductsReducer = useSelector((state) => state.ProductsReducer);
  useEffect(() => {
    const getItems = () => {
      dispatch(getProducts({}));
    };
    getItems();
  }, []);

  useEffect(() => {
    setItems(ProductsReducer.products);
  }, [ProductsReducer.products]);
  return (
    <div>
      <ProductList items={Items} />
    </div>
  );
};

export default ProductsContainer;
