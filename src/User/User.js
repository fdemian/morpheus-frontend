import React from 'react';
import './User.css';
import Avatar from '../Avatar/Avatar';
import SocialLinks from '../SocialLinks/SocialLinks';
import Stories from '../Stories/Stories';

const links = [
  { name: "facebook", url: "http://https://www.facebook.com/bleakroseinmortal" },
  { name: "twitter", url: "http://twitter.com/_fede_c" },
  { name: "github",  url: "http://https://github.com/fdemian" },
];

const User = ({stories, isFetching, error, user}) => {

  if(user === null)
    return null;

  const avatarLink = "/static/avatars/" + user.avatar;

  return(
  <div>

  	<div className="UserSummary">
  	  <Avatar src={avatarLink} size={100} className="UserAvatar" />
  		<h1 className="UserName">{user.name}</h1>
  		<em>Estudiante de Ingeniería en Sistemas, UTN.</em>
      <div style={{paddingTop: '10px', paddingLeft: '15px'}}>
        <SocialLinks links={links} />
      </div>
  	</div>

    <div className="UserStories">
      <Stories stories={stories} />
    </div>

  </div>
  );

}


export default User;
