import React from 'react';
import { BackTop } from 'antd';
import { Helmet } from "react-helmet";
import StoryItem from './StoryItem';
import LoadingIndicator from '../Loading/LoadingIndicator';
import getOptionsValues from '../utils/misc';
import { isLoggedIn } from '../Login/utils';
import { useStory, useOptions } from './Actions';
import './Story.css';

const Story = (props) => {

  const { match } = props;
  const { params } = match;
  const loggedIn = isLoggedIn();
  const { story, error } = useStory(params.id);
  const { options } = useOptions();

  // Will just assume these, for now.
  const oauthServices = [];
  const userExists = true;
  const setAnonymousUser = () => alert("NOT IMPLEMENTED");

  if(error)
    return <p>error</p>;

  if(!story || !options)
    return <LoadingIndicator />;

  const commentOptions = getOptionsValues(options, 'comments');

  return (
  <div className="story-container">

    <Helmet>
      <title>{story.title}</title>
      <meta charSet="utf-8" />
      <meta name="og:title" content={story.title} />
    </Helmet>

    <div className="BackToTop">
      <BackTop />
    </div>

    <StoryItem
      story={story}
      loggedIn={loggedIn}
      oauthServices={oauthServices}
      commentOptions={commentOptions}
      setAnonymousUser={setAnonymousUser}
      userExists={userExists}
    />

  </div>
  );
}

export default Story;
