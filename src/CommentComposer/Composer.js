import React, { useState, useRef } from 'react';
import { Drawer } from 'antd';
import { Editor } from 'elementary-editor';
import DrawerHeader from './DrawerHeader';
import ComposerHeader from './ComposerHeader';
import ComposerEditorHeading from './ComposerEditorHeading';
import './Composer.css';

const Composer = (props) => {

  const { visible, user } = props;
  const [composerVisible, setComposerVisible] = useState(visible);
  const editorContainer = useRef(null);

  const toggleComposer = () => {
    setComposerVisible(!composerVisible);
  }

  const postComment = () => {
    const editor = editorContainer.current;
    const { postComment } = props;
    const content = editor.getContent();

    postComment(content);
    toggleComposer();
    editor.clear();
  }

  const userlink = "/users/" + user.id + "/" + user.username;

  return (
  <React.Fragment>
    <ComposerHeader toggle={toggleComposer} />
    <Drawer
      title={<DrawerHeader userlink={userlink} user={user} />}
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

 </React.Fragment>
 );

}

export default Composer;
