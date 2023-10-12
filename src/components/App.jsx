import { Card } from './Card/Card';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Card
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Card>
      <Statistics title="Title" stats={data}></Statistics>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory transactions={transactions}></TransactionHistory>
    </>
  );
};
