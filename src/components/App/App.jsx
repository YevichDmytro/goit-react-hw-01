import css from './App.module.css';

import userData from '../../data/userData.json';
import Profile from '../Profile/Profile';

import friends from '../../data/friends.json';
import FriendList from '../FriendList/FriendList';

import transactions from '../../data/transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

const App = () => {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <>
      <div className={css.appWrap}>
        <Profile
          name={username}
          tag={tag}
          location={location}
          image={avatar}
          stats={stats}
        />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};

export default App;
