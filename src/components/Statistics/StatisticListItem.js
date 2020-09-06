import React from "react";
import PropTypes from "prop-types";
import { item, label_style, percentage_style } from "./statistics.module.css";

export const StatisticListItem = ({ label, percentage }) => (
  <li className={item}>
    <span className={label_style}>{label}</span>
    <span className={percentage_style}>{percentage}</span>
  </li>
);

StatisticListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
