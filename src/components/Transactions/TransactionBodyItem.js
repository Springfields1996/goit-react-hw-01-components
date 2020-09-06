import React from "react";
import PropTypes from "prop-types";
import { capitalizeFirstLetter } from "./Transactions";

export const TransactionBodyItem = ({ type, amount, currency }) => (
  <tr>
    <td>{capitalizeFirstLetter(type)}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);
