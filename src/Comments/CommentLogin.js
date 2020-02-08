import React from 'react';
//import OAuthButtons from '../OAuthButtons/OAuthButtons';

const CommentLogin = ({storyId, storyName, providers}) => {

  return(
  <div>
	   <p style={{fontSize:'24px'}}>Login to comment</p>
	   {/*<OAuthButtons services={providers} method="login" />*/}
  </div>
  );

}

export default CommentLogin;
