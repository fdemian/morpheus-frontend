import React from 'react';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCheck,
	faTimes
} from '@fortawesome/free-solid-svg-icons';
import './Composer.css';

const ComposerEditorHeading = ({toggleComposer, postComment}) => (
  <div className="ComposerHeading">

    <span className="PanelButtons">
      <Button.Group size="large">
        <Button type="danger" onClick={toggleComposer}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
          &nbsp; Discard
        </Button>
        <Button type="primary" onClick={postComment}>
          Post &nbsp;
          <FontAwesomeIcon icon={faCheck} size="lg" />
       </Button>
     </Button.Group>
   </span>

  </div>
)

export default ComposerEditorHeading;
