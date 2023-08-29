import { Profile } from 'components/Profile/Profile';
import { Statistics} from 'components/Statistics/Statistics';
import user from 'data/user.json';
import data from 'data/data.json';

export const App = () => {
  return (
   <div style={{
     height: '100vh',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     fontSize: 40,
     color: '#010101'
    }}> <Profile text={ user} />
      <Statistics data={ data} />
      
    </div>

);
};
