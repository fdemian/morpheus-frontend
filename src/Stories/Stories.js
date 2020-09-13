import React from 'react';
import { List } from 'antd';

import StoryItem from './StoriesItem';
import NoStoriesNotice from './NoStoriesNotice';

const pagination = {
  pageSize: 10,
  current: 1,
  total: 1,
  onChange: (() => {}),
};

const errorText = "There was an error retrieving the stories on this blog. Please try again later.";
const noStoriesText = "There are currently no stories on this blog.";

const Stories = (props) =>
{

   const {
     stories,
     error,
     onDelete,
     onEditClick,
     loggedIn
   } = props;

   if(error)
    return <NoStoriesNotice text={errorText} error={true} />;

   if(stories === null || stories.length === 0)
       return <NoStoriesNotice text={noStoriesText} error={false} />;

	return(
  <div className="stories-container">
    <div>
      <h1 className="StoriesTitle">Stories</h1>
    </div>

    <div className="StoryListContainer">
    	<List
    	  itemLayout="vertical"
    	  size="default"
        pagination={pagination}
        dataSource={stories}
        renderItem={item =>
          <StoryItem
            item={item}
            editFn={onEditClick}
            deleteFn={onDelete}
            loggedIn={loggedIn}
            stories={stories}
          />
        }
    	/>
    </div>
  </div>
	);

}


export default Stories;
