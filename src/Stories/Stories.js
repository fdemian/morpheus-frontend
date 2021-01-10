import React, {
  lazy,
  Suspense
} from 'react';
import List from 'antd/lib/list';
import Spin from 'antd/lib/spin';
import { isLoggedIn } from '../Login/utils';
import { deleteStory, useStories } from './Actions';
import { setIsEditingState } from './utils';
import './Stories.css';

const StoryItem =  lazy(() => import('./StoriesItem'));
const StoriesList =  lazy(() => import('./StoriesList'));
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
  <Suspense fallback={<Spin />}>
    <div className="stories-container">
        <div>
          <h1 className="StoriesTitle">Stories</h1>
        </div>

        <StoriesList
          stories={stories}
          pagination={pagination}
          editFn={onEditClick}
          deleteFn={(id) => deleteFn(id)}
          loggedIn={loggedIn}
        />
     </div>
  </Suspense>
	);

}


export default Stories;
