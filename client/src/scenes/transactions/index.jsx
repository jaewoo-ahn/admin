import React, { useState } from "react";
import { useGetTransactionsQuery } from "state/api";

const Transactions = () => {
  // values to be sent to the backend
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });

  console.log(page);
  console.log(pageSize);
  console.log(sort);
  console.log(search);
  return <div>Transactions</div>;
};

export default Transactions;
