import React, {
  lazy,
  Suspense
} from 'react';
import { List, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faComment }  from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import format_title_string from '../utils/formats';
import './Stories.css';

// Lazy imports.
const StoryLink = lazy(() => import('./StoryLink'));
const AccountAvatar = lazy(() => import('../UserAvatar/UserAvatar'));
const ActionButton = lazy(() => import('./ActionButton'));

const getAvatarLink = (author) => "/users/" + author.id + "/" + author.name;
const defaultCategory = { id: -1, name: "Uncategorized" };

const StoryItem = (props) => {

  const { item, editFn, deleteFn, loggedIn, stories  } = props;
  const commentsLink = "/stories/" + item.id + "/" + format_title_string(item.name) + "#comments";
  const storyDate = moment(item.date).fromNow();

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
          title={<StoryLink story={item} />}
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
