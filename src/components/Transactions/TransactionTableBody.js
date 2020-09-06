import React from "react";
import PropTypes from "prop-types";
import { TransactionBodyItem } from "./TransactionBodyItem";

export const TransactionTableBody = ({ data }) => (
  <>
    {data.map((elem) => (
      <TransactionBodyItem key={elem.id} {...elem} />
    ))}
  </>
);

TransactionTableBody.propTypes = {
  data: PropTypes.array.isRequired,
};
