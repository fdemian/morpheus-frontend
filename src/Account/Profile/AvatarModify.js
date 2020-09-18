import React from 'react';
import AvatarUpload from './AvatarUpload';
import AccountAvatar from '../../UserAvatar/UserAvatar';

const AvatarModify = ({props}) => {

  const {
    user,
    postFile,
    isFetching
  } = props;

  const avatarLink = '/static/avatars/' + user.avatar;

  return (
  <>
    <AccountAvatar
      avatar={user.avatar}
      username={user.username}
      size={150}
      shape="square"
    />
    <AvatarUpload
      imageUrl={avatarLink}
      postFile={postFile}
      uploading={isFetching}
    />
  </>
  );
}

export default AvatarModify;
