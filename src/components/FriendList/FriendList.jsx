import React from 'react';
import FriendListItem from "../FriendListItem/FriendListItem";
// import PropTypes from 'prop-types';


const FriendList = ({ friends }) => {
  return (
    <div>
        <ul>
		        {friends.map(friend => (
              <FriendListItem
                  key={friend.id}
                  avatar={friend.avatar}
                  name={friend.name}
                  isOnline={friend.isOnline}/>
                    ))}
        </ul>
    </div>
  )
}
// FriendList.propTypes = {
//   name: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
// };
export default FriendList