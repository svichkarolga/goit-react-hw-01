import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import '/src/App.css';
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";



function App() {
  return (
      <div>
       {userData.map((user) => {
          return (
            <Profile
            key={user.tag}
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
            />
          );
        })}
      </div>
    )
}
  export default App;