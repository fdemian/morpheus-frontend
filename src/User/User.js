import React from 'react';
import './User.css';
import Avatar from '../UserAvatar/UserAvatar';
//import SocialLinks from '../SocialLinks/SocialLinks';
import StoriesList from '../Stories/StoriesList';
import LoadingIndicator from '../Loading/LoadingIndicator';
import { useUser } from '../Login/Actions';
import { useUserStories } from './Actions';

/*
const links = [
  { name: "facebook", url: "http://https://www.facebook.com/<User_id>" },
  { name: "twitter", url: "http://twitter.com/<User_id>" },
  { name: "github",  url: "http://https://github.com/<User_id>" },
];*/

const pagination = {
  pageSize: 10,
  current: 1,
  total: 1,
  onChange: null
};

const User = (props) => {

  const { id } = props.match.params;
  const { user, isLoading } = useUser(id);
  const { userStories } = useUserStories(user ? user.user.id : null);

  if(!userStories || isLoading)
    return <LoadingIndicator />;

  const { stories } = userStories;
  const { avatar } = user;
  const avatarLink = avatar ? "/static/avatars/" + avatar : "";

  return(
  <div>

  	<div className="UserSummary">
  	  <Avatar
        username={user.user.name}
        avatar={avatarLink}
        src={avatarLink}
        size={100}
        shape="circle"
       />
  		<h1 className="UserName">{user.user.name}</h1>
  		<em>Estudiante de Ingeniería en Sistemas, UTN.</em>
      {/*
      <div style={{paddingTop: '10px', paddingLeft: '15px'}}>
        <SocialLinks links={links} />
      </div>*/}
  	</div>

    <div className="UserStories">
        <StoriesList
          stories={stories}
          pagination={pagination}
          editFn={null}
          deleteFn={null}
          loggedIn={false}
        />
    </div>

  </div>
  );

}


export default User;
