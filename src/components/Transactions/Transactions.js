import React from "react";
import { TransactionHeader } from "./TransactionHeader";
import { TransactionTableBody } from "./TransactionTableBody";
import { transaction_history } from "./transactions.module.css";

export const capitalizeFirstLetter = (string) =>
  string[0].toUpperCase() + string.slice(1);

export const Transactions = ({ items }) => (
  <table className={transaction_history}>
    <thead>
      <TransactionHeader data={items} />
    </thead>
    <tbody>
      <TransactionTableBody data={items} />
    </tbody>
  </table>
);
