import React, { useState, useRef, useImperativeHandle } from 'react';
import { Spin } from 'antd';
import { Editor } from 'elementary-editor';
import DrawerHeader from './DrawerHeader';
import ComposerHeader from './ComposerHeader';
import ComposerEditorHeading from './ComposerEditorHeading';
import { postComment } from './Actions';
import { useUser } from '../Login/Actions';
import { getLoginData, isLoggedIn } from '../Login/utils';
import './Composer.css';

const Composer = (props) => {

  const {
    storyId,
    anonymousUser,
    commentText,
    setCommentText,
    composerContainer
  } = props;
  const editorContainer = useRef(null);
  const [composerVisible, setComposerVisible] = useState(false);
  const toggleComposer = () => setComposerVisible(!composerVisible);

  const loggedIn = isLoggedIn();
  const userId = getLoginData();
  const { user, isLoading } = useUser(loggedIn ? userId : null);

  const postFn = () => {
    const editor = editorContainer.current;
    const content = editor.getContent();

    const commentParams = {
      user: anonymousUser ? anonymousUser : user.user,
      comment: content,
      anonymous: anonymousUser ? true : false
    };
    // Post comment to the server.
    postComment(storyId, commentParams);

    editor.clear();
    toggleComposer();

    //TODO: mutate
  }

  const clearComment = () => {
    const editor = editorContainer.current;
    editor.clear();
    toggleComposer();
  }

  // Exposed methods.
  useImperativeHandle(composerContainer, () => {
    return {
      editorContainer: editorContainer
    };
  });

  if(!loggedIn && !anonymousUser)
    return null;

  if(isLoading && !anonymousUser)
    return <Spin />;

  const userlink =  anonymousUser ? anonymousUser.link : `/users/${user.id}/${user.username}`;

  return(
  <span ref={composerContainer}>
    <ComposerHeader toggle={toggleComposer} />
    <span class={composerVisible ? "" : "Invisible"}>
       <ComposerEditorHeading
          clearComment={clearComment}
          postComment={postFn}
       />
       <div id="new-comment" className="CommentBox">
         <div className="EditorContainer">
           <Editor
              initialState={null}
              containerRef={editorContainer}
           />
         </div>
       </div>
      <br />
    </span>
 </span>
 );

}

export default Composer;
