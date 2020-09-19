import React, {
  lazy,
  Suspense
} from 'react';
import List from 'antd/lib/list';
import Spin from 'antd/lib/spin';
import Skeleton from 'antd/lib/skeleton';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import { faTrash, faEdit, faComment }  from '@fortawesome/free-solid-svg-icons';

import format_title_string from '../utils/formats';
import './Stories.css';

// Lazy imports.
const AccountAvatar = lazy(() => import('../UserAvatar/UserAvatar'));
const ActionButton = lazy(() => import('./ActionButton'));

const getAvatarLink = (author) => "/users/" + author.id + "/" + author.name;
const defaultCategory = { id: -1, name: "Uncategorized" };

// Format date.
const getFormattedDate = (dateSTR) => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  };
  const date = new Date(dateSTR);
  const storyDate = new Intl.DateTimeFormat("es", options)
                    .format(date).toString() + " hs";

  return storyDate;
}

const StoryItem = (props) => {

  const { item, editFn, deleteFn, loggedIn, stories  } = props;
  const commentsLink = "/stories/" + item.id + "/" + format_title_string(item.name) + "#comments";

  const itemActions = [
      <ActionButton
        title="Edit"
        linkURL="stories/new"
        icon={faEdit}
        clickFn={() => editFn(item.id, stories)}
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
        actions={
        <Suspense fallback={<Spin />}>
          {mappedActions}
        </Suspense>
        }
        extra={storyDate}
        >
       <div className="item-container">
         <List.Item.Meta
          avatar={
          <Link to={getAvatarLink(item.author)}>
            <AccountAvatar
              avatar={item.author.avatar}
              username={item.author.name}
              size={40}
            />
           </Link>
          }
          title={
          <Link to={storyLink}>
            <h1 className="StoryLinkTitle">{item.name}</h1>
          </Link>
          }
          description={
          <>
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
      </div>
    </List.Item>
  </Suspense>
  )
}

export default StoryItem;
