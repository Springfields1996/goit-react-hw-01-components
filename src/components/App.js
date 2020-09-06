import React from "react";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { StatisticList } from "./Statistics/StatisticList";
import { FriendsList } from "./Friends/FriendsList";
import { Transactions } from "./Transactions/Transactions";
// import { DropDown } from "./Dropdown/Dropdowm";
import transactions from "../transactions.json";
import statisticalData from "../statistical-data.json";
import user from "../user.json";
import friends from "../friends.json";

export const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats">
      <StatisticList stats={statisticalData} />
    </Statistics>
    <FriendsList data={friends} />

    <Transactions items={transactions} />

    {/* <Component>
      <DropDown />
    </Component> */}
  </>
);
