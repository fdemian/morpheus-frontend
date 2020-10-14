import React from 'react';
import CommentComposer from '../CommentComposer/Container';
import CommentLogin from '../Comments/CommentLogin';
import LoadingIndicator from '../Loading/LoadingIndicator';
import AnonymousUserForm from './AnonymousUserForm';

const CommentSpace = (props) => {

  const {
    loggedIn,
    storyTitle,
    storyId,
    oauthServices,
    commentOptions,
    setAnonymousUser,
    userExists
   } = props;

   if(commentOptions === null || commentOptions === undefined)
      return <LoadingIndicator />;

  if(commentOptions === "OFF")
    return (
    <h1 className="comments-disabled">
      Comments have been disabled.
    </h1>
    );

  if(commentOptions === "ANONYMOUS" && !userExists)
    return (
    <>
      <AnonymousUserForm setUser={setAnonymousUser} />
      <CommentLogin
        storyName={storyTitle}
        storyId={storyId}
        providers={oauthServices}
      />
    </>
    );

  if(userExists){
    if(loggedIn)
      return <CommentComposer storyTitle={storyTitle} />;

    return (
    <>
      <CommentComposer storyTitle={storyTitle} />
      <CommentLogin
  		  storyName={storyTitle}
        storyId={storyId}
     	  providers={oauthServices}
    	/>
    </>
    )

  }
  else {
    if(!loggedIn)
     return(
     <CommentLogin
		   storyName={storyTitle}
       storyId={storyId}
   	   providers={oauthServices}
  	 />
     );
  }

}

export default CommentSpace;
