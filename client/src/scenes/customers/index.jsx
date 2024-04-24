import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";
import { useGetCustomersQuery } from "state/api";

const Customers = () => {
  const Theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();
  console.log(data);
  return <div>Customers</div>;
};

export default Customers;
