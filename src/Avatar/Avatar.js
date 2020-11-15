import React from 'react';
import './Avatar.css';

const Avatar = ({src, username, size}) => {

  if(username === null)
  return(
   <img
      role="img"
      src={src}
	    width={size}
	    height={size}
	    alt={username}
	    className="Avatar"
	  />
  );

  if(username !== null)
  return(
  <span>
    <img role="img" src={src} width={size} height={size} alt={username} className="Avatar" />
	  <span className="AvatarText">{username}</span>
  </span>
  );

};

export default Avatar;
