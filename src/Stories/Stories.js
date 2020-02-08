import React from 'react';
import { List } from 'antd';

import GridContent from '../PageHeaderWrapper/GridContent';
import StoryItem from './StoriesItem';

const pagination = {
  pageSize: 10,
  current: 1,
  total: 1,
  onChange: (() => {}),
};

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
     <div className="stories-container">
       <GridContent>
         <div className="Error">
           <h1 className="NoStories ErrorText">
              There was an error retrieving the stories on this blog. Please try again later.
           </h1>
         </div>
       </GridContent>
      </div>
      );

   if(stories === null || stories.length === 0)
      return(
      <div className="stories-container">
        <GridContent>
          <h1 className="NoStories">
            There are currently no stories on this blog.
          </h1>
        </GridContent>
      </div>
      );

	return(
  <div className="stories-container">
    <GridContent>

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

    </GridContent>
  </div>
	);

}


export default Stories;
