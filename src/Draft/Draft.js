import React from 'react';
import StoryItem from '../Story/StoryItem';
import { useDraft } from './Actions';
import { isLoggedIn } from '../Login/utils';

const Draft = (props) => {

  const { params } = props.match
  const { id } = params;
  const { draft, error, isLoading } = useDraft(id);
  const loggedIn = isLoggedIn();

  if(!loggedIn)
    return <h1>Must be logged in to view drafts</h1>;

  const storyProps = {
    story: draft,
    isFetching: isLoading,
    error: error,
    loggedIn: loggedIn,
    userExists: loggedIn,
    oauthServices: [],
    commentOptions: [],
  };

  return <StoryItem {...storyProps} />;
}

export default Draft;
