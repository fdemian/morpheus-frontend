import React from 'react';
import { BackTop } from 'antd';
import { Helmet } from "react-helmet";

import StoryTitle from './StoryTitle';
import StoryText from './StoryText';
import Comments from '../Comments/Comments';
import StoryFooter from './StoryFooter';
import CommentSpace from './CommentSpace';

const StoryItem = (props) => {

  const {
    story,
    loggedIn,
    oauthServices,
    commentOptions,
    setAnonymousUser,
    userExists
  } = props;

  const datepart = story.date.split('.')[0];

  return(
  <>
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
  </>
  )

}

export default StoryItem;
