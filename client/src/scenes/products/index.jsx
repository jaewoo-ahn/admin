import React from "react";
import { useGetProductsQuery } from "state/api";
import { Box } from "@mui/material";
import Header from "components/Header";

const Products = () => {
  const { data } = useGetProductsQuery();
  return (
    <Box>
      <Header title="PRODUCTS" subtitle="See your lists of products" />
    </Box>
  );
};

export default Products;
