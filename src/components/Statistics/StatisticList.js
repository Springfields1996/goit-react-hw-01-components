import React from "react";
import PropTypes from "prop-types";

import { StatisticListItem } from "./StatisticListItem";

export const StatisticList = ({ stats }) =>
  stats.map((elem) => <StatisticListItem key={elem.id} {...elem} />);

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
};
