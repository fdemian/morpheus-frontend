import React, {
  lazy,
  Suspense
} from 'react';
import List from 'antd/lib/list';
import Spin from 'antd/lib/spin';
import StoryItem from './StoriesItem';
import { isLoggedIn } from '../Login/utils';
import { deleteStory, useStories } from './Actions';
import { setIsEditingState } from './utils';

const NoStoriesNotice = lazy(() => import('./NoStoriesNotice'));

const pagination = {
  pageSize: 10,
  current: 1,
  total: 1,
  onChange: null
};

const errorText = "There was an error retrieving the stories on this blog. Please try again later.";
const noStoriesText = "There are currently no stories on this blog.";

const Stories = () => {

   const loggedIn = isLoggedIn();
   const { data, mutate, error, isLoading } = useStories();

   const onEditClick = () => setIsEditingState();

   const deleteFn = (id) => {
     deleteStory(id);

     const _items = data.items.filter(s => s.id !== id);
     const newData = { page: 1, items: _items };
     mutate("/api/stories", newData);
   }

   if(error)
    return (
    <Suspense fallback={<Spin />}>
      <NoStoriesNotice text={errorText} error={true} />
    </Suspense>
   );

   if (isLoading)
   return(
   <Suspense fallback={<Spin />}>
     <NoStoriesNotice text={noStoriesText} error={false} />
   </Suspense>
   );

  const stories = data.items;

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
              deleteFn={(id) => deleteFn(id)}
              loggedIn={loggedIn}
            />
          }
      	/>
      </Suspense>
    </div>
  </div>
	);

}


export default Stories;
