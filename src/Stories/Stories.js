import React, {
  lazy,
  useState,
  Suspense
} from 'react';
import List from 'antd/lib/list';
import Spin from 'antd/lib/spin';
import { isLoggedIn } from '../Login/utils';
import { deleteStory, useStories } from './Actions';
import { setIsEditingState } from './utils';
import './Stories.css';
import InfiniteScroll from 'react-infinite-scroller';

const StoryItem =  lazy(() => import('./StoriesItem'));
const StoriesList =  lazy(() => import('./StoriesList'));
const NoStoriesNotice = lazy(() => import('./NoStoriesNotice'));

const errorText = "There was an error retrieving the stories on this blog. Please try again later.";
const noStoriesText = "There are currently no stories on this blog.";

/*
const hasMore = () => {
  return (
    data.items.length >= data.pageSize && data.totalItems
    &&
    data.
 );*/
 /* loadMore={this.handleInfiniteOnLoad}
    hasMore={!this.state.loading && this.state.hasMore}
 */
//const loadMore = () => {};
const Stories = () => {

   const [currentPage, setCurrentPage] = useState(0);
   const loggedIn = isLoggedIn();
   const { data, mutate, error, isLoading } = useStories(currentPage);

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

   if(isLoading)
   return(
   <Suspense fallback={<Spin />}>
     <NoStoriesNotice text={noStoriesText} error={false} />
   </Suspense>
   );

  const stories = data.items;

	return(
  <Suspense fallback={<Spin />}>
    <div className="stories-container">
        <h1 className="StoriesTitle">Stories</h1>
        <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={null}
            hasMore={false}
            useWindow={false}
       >
          <StoriesList
             stories={stories}
             editFn={setIsEditingState}
             deleteFn={deleteFn}
             loggedIn={loggedIn}
          />
        </InfiniteScroll>
     </div>
  </Suspense>
	);

}


export default Stories;
