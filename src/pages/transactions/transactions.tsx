import { Container, Typography } from "@material-ui/core";
import React from "react";
import ListView from "../../components/list-view/list-view";
import { TransactionStore } from "../../stores/transaction-store";

let columns = [
  "id",
  "Posting Date",
  "Account",
  "Description",
  "Status",
  "Amount"
];
export default function Transactions() {
  const transactionStore = new TransactionStore();
  return (
    <Container fixed>
      <Typography variant="h5" component="p" align="left">
        Latest Transactions
      </Typography>
      <ListView columnNames={columns} data={transactionStore.allTransactions} />
    </Container>
  );
}
