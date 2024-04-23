import React from "react";
import { useGetProductsQuery } from "state/api";
const Products = () => {
  const { data } = useGetProductsQuery();
  return <div>Products</div>;
};

export default Products;
