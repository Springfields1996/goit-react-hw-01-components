import React from "react";
import PropTypes from "prop-types";
import { TransactionsHeaderItem } from "./TransactionsHeaderItem";
import { capitalizeFirstLetter } from "./Transactions";

export const TransactionHeader = ({ data }) => (
  <tr>
    {Object.keys(data.find((elem) => "type" && "amount" && "currency" in elem))
      .filter((key) => key !== "id")
      .map((elem) => (
        <TransactionsHeaderItem key={elem} header={capitalizeFirstLetter(elem)} />
      ))}
  </tr>
);

TransactionHeader.propTypes = {
  data: PropTypes.array.isRequired,
};
