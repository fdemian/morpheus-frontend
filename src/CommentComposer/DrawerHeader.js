import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ComposerAvatar from '../UserAvatar/UserAvatar';
import './Composer.css';

const DrawerHeader = ({userlink, user, commentsEnabled, anonymousUser}) => {

	if(commentsEnabled === 'OFF')
		return null;

	if(anonymousUser)
		return(
		<span className="DrawerHeader">
			Posting as
			<a
				href={user.link}
				className="UserLink UserInfoLink"
			>
				{user.username}
			</a>
			 &nbsp;
			 <FontAwesomeIcon
				 icon={faReply}
				 size="lg"
				 color="gainsboro"
			 />
		</span>
		)

	return(
	<span className="DrawerHeader">
		Posting as
		<Link
			to={userlink}
			className="UserLink UserInfoLink"
		>
			<ComposerAvatar
				username={user.username}
				avatar={user.avatar}
				size="large"
			/>
		</Link>
		{user.username}
		 &nbsp;
		 <FontAwesomeIcon
			 icon={faReply}
			 size="lg"
			 color="gainsboro"
		 />
	</span>
	);

}

export default DrawerHeader;
