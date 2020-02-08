import React from 'react';
import { Avatar } from 'antd';
import './Composer.css';

const ComposerAvatar = ({user}) => {

	if(user.role === 'guest')
		return <span>{user.username}</span>;

	if(user.avatar.trim() === "")
	return(
		<span>
			<Avatar
				size="large"
				className="UserAvatar"
			>
			 {user.username[0]}
			</Avatar>
			{user.username}
		</span>
	);

	return(
	<span>
		<Avatar
		  src={"/static/avatars/" + user.avatar}
			size="large"
			className="UserAvatar"
		/>
		{user.username}
	</span>
	);

}

export default ComposerAvatar;
