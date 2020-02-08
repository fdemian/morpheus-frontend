import React from 'react';
import { Link } from 'react-router-dom';
import AccountAvatar from '../UserAvatar/UserAvatar';
import SocialLinks from '../SocialLinks/SocialLinks';
import StoryTags from './StoryTags';
import './Story.css';

const shareLinks = [
  {url:"https://twitter.com/intent/tweet?text='New Blog'" , name: "twitter"},
  {url:"https://facebook.com", name: "facebook"}
]

const StoryFooter = (props) => {

 if(!props)
   return null;

 const { storyInfo } = props;
 const { author, tags } = storyInfo;
 const userlink = "/users/" + author.id + "/" + author.username;

 return (
	<div className="StoryFooter">

  		<div className="StoryTags">
  			<StoryTags tags={tags} />
  		</div>

  		<div className="UserInfoContainer">
  			<Link to={userlink} className="UserLink">
          <AccountAvatar
             username={author.username}
             avatar={author.avatar}
             size='large'
          />
          {author.username}
  			</Link>

  			<p className="UserDescription">
  			  {author.signature}
  			</p>
  		</div>

  		<div className="SharingLinksContainer">
  			<SocialLinks links={shareLinks} />
  		</div>

  		<hr />

    </div>
   );
}

export default StoryFooter;
