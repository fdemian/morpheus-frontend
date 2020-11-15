import React from 'react';
import { BackTop } from 'antd';
import { Helmet } from "react-helmet";

import StoryTitle from './StoryTitle';
import StoryText from './StoryText';
import Comments from '../Comments/Comments';
import StoryFooter from './StoryFooter';
import CommentSpace from './CommentSpace';
import LoadingIndicator from '../Loading/LoadingIndicator';
import getOptionsValues from '../utils/misc';
import { isLoggedIn } from '../Login/utils';
import { useStory, useOptions } from './Actions';
import useSWR from 'swr';

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
  const datepart = story.date.split('.')[0];

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

        <div className="StoryTitleContainer">
          <StoryTitle
            title={story.title}
            category={story.category}
            author={story.author}
            date={datepart}
            isDraft={story.isDraft}
          />
        </div>

        <div>
          <StoryText content={story.content} />
        </div>

        <StoryFooter storyInfo={story} />

       {story.isDraft ? null :
        (
        <>
          <div className="CommentSpace">
            <CommentSpace
              loggedIn={loggedIn}
              story={story}
              oauthServices={oauthServices}
              commentOptions={commentOptions}
              setAnonymousUser={setAnonymousUser}
              userExists={userExists}
            />
          </div>
          <div className="StoryComments" id="comments">
             <Comments
                comments={story.comments}
                loggedIn={loggedIn}
             />
          </div>
        </>
        )
        }
  </div>
  );
}

export default Story;
