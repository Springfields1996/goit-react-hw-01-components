import React from "react";
import PropTypes from "prop-types";
import { statistics, stat_list, title_style } from "./statistics.module.css";

export const Statistics = ({ title, children }) => {
  return (
    <section className={statistics}>
      {{ title } && <h2 className={title_style}>{title}</h2>}
      <ul className={stat_list}>{children}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};
