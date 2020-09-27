import React, {
  lazy,
  Suspense
} from 'react';
import List from 'antd/lib/list';
import Spin from 'antd/lib/spin';
import StoryItem from './StoriesItem';
import useSWR from 'swr';
import { fetcher } from '../store/utils';

const NoStoriesNotice = lazy(() => import('./NoStoriesNotice'));

const pagination = {
  pageSize: 10,
  current: 1,
  total: 1,
  onChange: null
};

const errorText = "There was an error retrieving the stories on this blog. Please try again later.";
const noStoriesText = "There are currently no stories on this blog.";

const Stories = (props) => {

   const { data, error } = useSWR("/api/stories", fetcher, { suspense: true });

   const onDelete = () => console.log("onDelete");
   const onEditClick = () => console.log("onEditClick");
   const loggedIn = false;

   if(error)
    return (
    <Suspense fallback={<Spin />}>
      <NoStoriesNotice text={errorText} error={true} />
    </Suspense>
   );

   if (!data)
   return (
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
