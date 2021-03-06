import React, { useState, useRef } from 'react';
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

  const { storyId, anonymousUser } = props;
  const [composerVisible, setComposerVisible] = useState(false);
  const editorContainer = useRef(null);
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
    toggleComposer();
    editor.clear();
  }

  if(!loggedIn && !anonymousUser)
    return null;

  if(isLoading && !anonymousUser)
    return <Spin />;

  const userlink =  anonymousUser ? anonymousUser.link : `/users/${user.id}/${user.username}`;

  return(
  <>
    <ComposerHeader toggle={toggleComposer} />
    <Drawer
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
      height={520}
     >
       <ComposerEditorHeading
          toggleComposer={toggleComposer}
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
   </Drawer>
 </>
 );

}

export default Composer;
