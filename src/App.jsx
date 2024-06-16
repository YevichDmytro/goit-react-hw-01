import userData from './userData.json';
import Profile from './components/Profile/Profile';

const App = () => {
  console.log(userData);
  console.log('1');

  return (
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
    />
  );
};

export default App;
