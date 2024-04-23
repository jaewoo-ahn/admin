import React from "react";
import { useGetProductsQuery } from "state/api";
import Header from "components/Header";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  console.log(data);
  return (
    <Box>
      <Header title="PRODUCTS" subtitle="See your lists of products" />
    </Box>
  );
};

export default Products;
