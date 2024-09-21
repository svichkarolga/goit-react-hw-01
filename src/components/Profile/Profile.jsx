import React from 'react';
import styles from "./Profile.module.css";
console.log(styles);

const Profile = ({ username, avatar, tag, location, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={styles.card}>
      <div>
        <img
          src={avatar}
          alt={username}
        />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <li>
          <span>Followers:</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views:</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes:</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
export default Profile;
