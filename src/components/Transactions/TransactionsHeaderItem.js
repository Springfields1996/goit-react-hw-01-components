import React from "react";
import PropTypes from "prop-types";

export const TransactionsHeaderItem = ({ header }) => <th>{header}</th>;

TransactionsHeaderItem.propTypes = {
  header: PropTypes.string.isRequired,
};
