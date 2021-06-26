import React from 'react';
import CommentComposer from '../CommentComposer/Composer';
import CommentLogin from '../Comments/CommentLogin';
import LoadingIndicator from '../Loading/LoadingIndicator';
import AnonymousUserForm from './AnonymousUserForm';

const CommentSpace = (props) => {

  const {
    loggedIn,
    storyTitle,
    story,
    oauthServices,
    commentOptions,
    setAnonymousUser,
    anonymousUser,
    userExists,
    composerContainer
   } = props;

   if(commentOptions === null || commentOptions === undefined)
      return <LoadingIndicator />;

  /*
   * Comment options is a site-wide setting to determine
   * who can comment on stories.
   * OFF: comments are disabled. No one can comment.
   * ANONYMOUS: anonymous people can comment, only a username is required.
   * LOGGED_IN: only users of this blog can comment. They must be logged in.
   */
  switch(commentOptions) {
    case "OFF":
      {
        return (
        <h1 className="comments-disabled">
          Comments have been disabled.
        </h1>
        );
      }
      break;
    case "ANONYMOUS":
      {
           if(userExists) {
            return (
            <CommentComposer
               storyId={story.id}
               anonymousUser={null}
               composerContainer={composerContainer}
             />);
           }

           if(anonymousUser && !userExists) {
            return (
            <CommentComposer
               storyId={story.id}
               anonymousUser={anonymousUser}
               composerContainer={composerContainer}
            />);
          }

          if(!anonymousUser && !userExists) {
          return(
          <>
            <AnonymousUserForm setUser={setAnonymousUser} />
            <CommentLogin
               storyName={storyTitle}
               storyId={story.id}
               providers={oauthServices}
            />
          </>
          );

        }

      }
      break;
    case "LOGGED_IN":
      {
         if(userExists) {
           return (
           <CommentComposer
             storyId={story.id}
             anonymousUser={null}
             composerContainer={composerContainer}
           />);
         }
         else {
           return (
           <CommentLogin
             storyName={storyTitle}
             storyId={story.id}
             providers={oauthServices}
           />
           );
         }
      }
    default:
      return null;
  }

}

export default CommentSpace;
