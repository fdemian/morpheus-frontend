import React from 'react';
import Story from '../Story/Story';
import useSWR from 'swr';
import { isLoggedIn } from '../Login/utils';

const Drafts = (props) => {

  const { params } = props.match
  const {id } = params;
  const { data, error } = useSWR(`/api/drafts?id=${id}`);
  const loggedIn = isLoggedIn();

  if(!loggedIn)
    return <h1>Must be logged in to view drafts</h1>;

  const storyProps = {
    story: data,
    isFetching: false,
    error: error,
    loggedIn: loggedIn,
    userExists: loggedIn,
    oauthServices: [],
    commentOptions: [],
  };

  return <Story {...storyProps} />;
}

export default Drafts;
