import { Card } from "./Card/Card";
import { FriendList } from "./FriendList/FriendList";
import { Statistics } from "./Statistics/Statistics";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import { FC } from "react";

export const App: FC = () => {
  return (
    <div>
      <Card
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Title" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
