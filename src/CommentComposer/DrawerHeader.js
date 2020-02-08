import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ComposerAvatar from './ComposerAvatar';
import './Composer.css';

const DrawerHeader = ({userlink, user, commentsEnabled}) => {

	if(commentsEnabled === 'OFF')
		return null;

	if(user.role === 'guest')
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
			<ComposerAvatar user={user} />
		</Link>
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
