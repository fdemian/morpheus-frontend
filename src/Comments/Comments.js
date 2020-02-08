import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Comment, Tooltip, List } from 'antd';
import { DefaultRenderer }  from 'elementary-editor';
import AccountAvatar from '../UserAvatar/UserAvatar';
import './Comments.css';
import moment from 'moment';

const DateComponent = ({commentDate}) => {

  const formattedDate = moment(commentDate)
                        .format("Do MMM YYYY HH:mm:ss");

  console.clear();
  console.log(formattedDate);

  return(
  <Tooltip title={formattedDate}>
   <span>
     {moment(commentDate).fromNow()}
   </span>
  </Tooltip>
  );
}

const Comments = ({comments, loggedIn}) => {

  const commentLength = comments.length;
  const repliesText = commentLength === 1 ? "reply" : "replies";
  if(commentLength === 0 || comments === undefined)
    return null;

  return(
  <div>

	  <div>
	    <p className="CommentsTitle">
		 Comments
		 &nbsp;
		 <FontAwesomeIcon icon={faComment} size="lg" />
		</p>
	  </div>
    <br />
    <List
      className="comment-list"
      header={<h1>{commentLength} {repliesText} </h1>}
      itemLayout="horizontal"
      dataSource={comments}
      renderItem={item => (
        <li>
          <Comment
            actions={null}
            author={
             <p className="UserMenuName">{item.author}</p>
            }
            avatar={
             <Link to={item.url}>
                <AccountAvatar
                   avatar={item.avatar}
                   username={item.author}
                   size="large"
                   shape="circle"
                />
             </Link>
            }
            content={
            <span className="CommentText">
              <DefaultRenderer raw={JSON.parse(item.content)} />
            </span>
            }
            datetime={
            <DateComponent commentDate={item.date.split('.')[0]} />
            }
          />
         <br />
         <br />
        </li>

      )}
    />

  </div>
  );
}

export default Comments;
