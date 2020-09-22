import React, {
  lazy,
  Suspense
} from 'react';

import List from 'antd/lib/list';
import Spin from 'antd/lib/spin';

import StoryItem from './StoriesItem';

const NoStoriesNotice = lazy(() => import('./NoStoriesNotice'));

const pagination = {
  pageSize: 10,
  current: 1,
  total: 1,
  onChange: null
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
    return (
    <Suspense fallback={<Spin />}>
      <NoStoriesNotice text={errorText} error={true} />
    </Suspense>
    );

   if(stories === null || stories.length === 0)
   return (
   <Suspense fallback={<Spin />}>
      <NoStoriesNotice text={noStoriesText} error={false} />
    </Suspense>
    );

	return(
  <div className="stories-container">

    <div>
      <h1 className="StoriesTitle">Stories</h1>
    </div>

    <div className="StoryListContainer">
     <Suspense fallback={<Spin />}>
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
      </Suspense>
    </div>
  </div>
	);

}


export default Stories;
