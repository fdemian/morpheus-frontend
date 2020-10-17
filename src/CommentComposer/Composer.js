import React, { useState, useRef } from 'react';
import { Drawer } from 'antd';
import { Editor } from 'elementary-editor';
import DrawerHeader from './DrawerHeader';
import ComposerHeader from './ComposerHeader';
import ComposerEditorHeading from './ComposerEditorHeading';
//import postComment from './Api';
//import { useSWR } from 'swr'; //TODO
import './Composer.css';

const Composer = (props) => {

  const { visible, storyId, user, token } = props;
  const [composerVisible, setComposerVisible] = useState(visible);
  const editorContainer = useRef(null);

  const toggleComposer = () =>  setComposerVisible(!composerVisible);
  const postComment = () => {
    const editor = editorContainer.current;
    const content = editor.getContent();
    const commentParams = {
      user: user,
      comment: content,
      token: token
    };

    // Post comment to the server.
    postComment(storyId, commentParams);
    //TODO: mutate

    // Clear comment editor.
    toggleComposer();
    editor.clear();
  }

  if(!user)
    return null;

  return(
  <>
    <ComposerHeader toggle={toggleComposer} />
    <Drawer
      title={
        <DrawerHeader
          userlink={`/users/${user.id}/${user.username}`}
          user={user}
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
          postComment={postComment}
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
