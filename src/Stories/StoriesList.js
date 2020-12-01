import React, {
  lazy,
  Suspense
} from 'react';
import List from 'antd/lib/list';
import Spin from 'antd/lib/spin';
import StoryItem from './StoriesItem';
import './Stories.css';

const StoriesList = (props) => {

  const {
    stories,
    pagination,
    editFn,
    deleteFn,
    loggedIn
  } = props;

  return (
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
              editFn={editFn}
              deleteFn={(id) => deleteFn(id)}
              loggedIn={loggedIn}
            />
          }
      	/>
      </Suspense>
    </div>
  );
}

export default StoriesList;
