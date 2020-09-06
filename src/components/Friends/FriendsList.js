import React from "react";
import PropTypes from "prop-types";
import { FriendsListItem } from "./FriendListItem";
import { friend_list } from "./friends.module.css";

export const FriendsList = ({ data }) => (
  <ul className={friend_list}>
    {data.map((elem) => (
      <FriendsListItem key={elem.id} {...elem} />
    ))}
  </ul>
);

FriendsList.propTypes = {
  data: PropTypes.array.isRequired,
};
