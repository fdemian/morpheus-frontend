import React, { useState, useRef, useImperativeHandle } from 'react';
import { Drawer, Spin } from 'antd';
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
    //TODO: mutate
    // Clear comment editor.
    editor.clear();

  }

  const clearComment = () => {
    const editor = editorContainer.current;
    editor.clear();
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
    {/*<ComposerHeader toggle={toggleComposer} />*/}
    {/*<Drawer
      title={
        <DrawerHeader
          userlink={anonymousUser ? anonymousUser.link : userlink}
          user={anonymousUser ? anonymousUser : user.user}
          anonymousUser={anonymousUser !== null}
        />
      }
      className="ComposerDrawer"
      placement="bottom"
      closable={true}
      onClose={toggleComposer}
      visible={composerVisible}
      height={300}
     >*/}
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
   {/*</Drawer>*/}
      <br />
 </span>
 );

}

export default Composer;
