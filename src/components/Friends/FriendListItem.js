import React from "react";
import PropTypes from "prop-types";
import style from "./friends.module.css";

export const FriendsListItem = ({ avatar, name, isOnline }) => (
  <li className={style.item}>
    <span className={isOnline ? style.green : style.red}></span>
    <img className={style.avatar} src={avatar} alt="" width="48" />
    <p className={style.name}>{name}</p>
  </li>
);

FriendsListItem.propTypes = {
  key: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
