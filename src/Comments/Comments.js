import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Comment, Tooltip, List, Button } from 'antd';
import { DefaultRenderer }  from 'elementary-editor';
import AccountAvatar from '../UserAvatar/UserAvatar';
import './Comments.css';
import getRelativeTime from '../utils/time';

const DateComponent = ({commentDate}) => {

  const locale = 'es-AR';
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  };
  const _date = new Date(commentDate);
  const formattedDate = new Intl.DateTimeFormat(locale, options).format(_date);
  const relTime = getRelativeTime(+new Date(_date));

  return(
  <Tooltip title={formattedDate}>
   <span>
     {relTime}
   </span>
  </Tooltip>
  );
}


const Comments = (props) => {

  const {
    comments,
    loggedIn,
    addQuotedComment,
    commentText
  } = props;
  const commentLength = comments.length;
  const repliesText = commentLength === 1 ? "reply" : "replies";
  if(commentLength === 0 || comments === undefined)
    return null;

  return(
  <div className="comments-container">

	  <>
	   <p className="CommentsTitle">
		   Comments
		   &nbsp;
		   <FontAwesomeIcon icon={faComment} size="lg" />
		 </p>
	  </>

    <br />
    <List
      className="comment-list"
      header={<h1>{commentLength} {repliesText} </h1>}
      itemLayout="horizontal"
      dataSource={comments}
      renderItem={item => (
        <li>
          <Comment
            actions={[
            <Button onClick={() => addQuotedComment(item)}>
              Quote
            </Button>
            ]}
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
