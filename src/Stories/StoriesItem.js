import React, {
  lazy,
  Suspense
} from 'react';
import List from 'antd/lib/list';
import Skeleton from 'antd/lib/skeleton';
import Spin from 'antd/lib/spin';
import ActionButton from './ActionButton';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faComment }  from '@fortawesome/free-solid-svg-icons';

import format_title_string from '../utils/formats';
import { getFormattedDate } from '../utils/time';
import './Stories.css';

// Lazy imports.
const AccountAvatar = lazy(() => import('../UserAvatar/UserAvatar'));

const getAvatarLink = (author) => `/users/${author.id}/${author.name}`;
const defaultCategory = { id: -1, name: "Uncategorized" };

const StoryItem = (props) => {

  const { item, deleteFn, loggedIn } = props;
  const commentsLink = `/stories/${item.id}/${format_title_string(item.name)}#comments`;
  const { author } = item;

  const itemActions = [
    <ActionButton
      title="Edit"
      linkURL={`/stories/edit/${item.id}`}
      icon={faEdit}
      id={item.id}
      className="IconRight EditStoryIcon"
    />,
    <ActionButton
      title="Delete"
      linkURL="#"
      icon={faTrash}
      clickFn={deleteFn}
      id={item.id}
      cssClass="DeleteStoryIcon"
    />
   ];

   const mappedActions = loggedIn ? itemActions : [];
   let category = item.category != null ? item.category : defaultCategory;
   const categoryLink = "/categories/" + category.id + "/" + category.name;

   // Story link
   const storyLink = '/stories/' + item.id + '/' + format_title_string(item.name);
   const storyDate = getFormattedDate(item.date);

   return(
   <Suspense fallback={
     <Skeleton
       avatar
       paragraph={{ rows: 3 }}
     />
    }>
     <List.Item
        key={item.id}
        actions={mappedActions}
        extra={storyDate}
      >
         <List.Item.Meta
          avatar={
          <Link to={getAvatarLink(item.author)}>
            <Suspense fallback={<Spin />}>
              <AccountAvatar
                avatar={author.avatar}
                username={author.name}
                size={40}
              />
              </Suspense>
          </Link>
          }
          description={
          <>
            <Link to={storyLink}>
              <span className="StoryLinkTitle">{item.name}</span>
            </Link>
            <br />
            <Link to={categoryLink}>
              {category.name}
            </Link>
            <br />
            <br />
            <Link to={commentsLink}>
              <FontAwesomeIcon
                icon={faComment}
                size="lg"
                className="IconLeft"
              />
               &nbsp;
               {item.comments}
               &nbsp; comments
            </Link>
          </>
          }
        />
    </List.Item>
  </Suspense>
  );
}

export default StoryItem;
