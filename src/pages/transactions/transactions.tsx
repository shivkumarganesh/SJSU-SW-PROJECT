import React from "react";
import ListView from "../../components/list-view/list-view";

let columns = [
  "id",
  "Posting Date",
  "Account",
  "Description",
  "Status",
  "Amount"
];
export default function Transactions() {
  return <ListView columnNames={columns} data={[]} />;
}
