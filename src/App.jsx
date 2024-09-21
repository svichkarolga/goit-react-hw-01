import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import '/src/App.css';
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import userData from "./userData.json";
import friends from "./friends.json"


function App() {
  return (
    <>
      
      <div>
      <h2>Завдання 1</h2>
      {userData.map((user) => {
        return (
          <Profile
            key={user.tag}
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats} />
        );
      })}
      </div>

      <div>
        <h2>Завдання 2</h2>
        <FriendList friends={friends} />
      </div>

    </>
    )
}


  export default App;