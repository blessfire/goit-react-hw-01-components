import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/Friends/FriendsList';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
// import transactions from 'data/transactions.json';


export const App = () => {
  return (
    <div 
    style = {{
        minHeight: '100vh',
      width:'768px',
        display: 'flex',
        flexDirection: 'column',
     flexWrap: 'noWrap',
     justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 80px',
     fontSize: 28,
     color: '#010101'
      }}
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/>
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendsList friends={friends}
        // avatar={friends.avatar} name={friends.name}
        // isOnline={friends.isOnline} key={friends.id}
      />
    </div>

);
};
