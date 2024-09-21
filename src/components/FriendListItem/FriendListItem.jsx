import React from 'react';
// import styles from "./FriendListItem.modules.css";
// import PropTypes from 'prop-types';


const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <div>
          <img src={avatar} alt={name} width="48" />
          <p>{name}</p>
        {/* <p>{isOnline? styles.online : styles.offline}</p> */}
    </div>
  )
}
// FriendListItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
// };

export default FriendListItem


