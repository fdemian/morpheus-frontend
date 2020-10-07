import React from 'react';
import AvatarUpload from './AvatarUpload';
import AccountAvatar from '../../UserAvatar/UserAvatar';

const AvatarModify = (props) => {

  const {
    user,
    postFile,
    isFetching
  } = props;

  let username = user ? user.username : "";
  let avatar = user ? user.avatar: "";
  let avatarUrl = user ? `/static/avatars/${avatar}` : '';

  return (
  <>
    { isFetching ? null :
    <AccountAvatar
      avatar={avatar}
      username={username}
      size={150}
      shape="square"
    />
    }
    <AvatarUpload
      imageUrl={avatarUrl}
      postFile={postFile}
      uploading={isFetching}
      username={username}
    />
  </>
  );
}

export default AvatarModify;
