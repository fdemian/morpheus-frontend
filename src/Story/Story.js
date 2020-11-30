import React, {useState} from 'react';
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
  const { options, isLoading } = useOptions();

  // Will just assume these, for now.
  const oauthServices = [];
  const [anonymousUser, setAnonymousUser] = useState(null);

  if(error)
    return <p>error</p>;

  if(!story || !options || isLoading)
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
      anonymousUser={anonymousUser}
      setAnonymousUser={setAnonymousUser}
    />

  </div>
  );
}

export default Story;
