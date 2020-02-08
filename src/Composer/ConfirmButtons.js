import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlus as plus,
	faEdit as edit,
	faTimes as close,
  faFileDownload as saveDraftIcon
} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const ConfirmButtons = (props) => {

  const {
    isDraft,
    editing,
    postStoryContent,
		postAsDraftFn
  } = props;

  const acceptText = editing ? "Edit Topic" : "Create Topic" ;
  const acceptIcon = editing ? edit : plus;
	const draftText  = editing ? "Save draft" : "Save as draft";

	// New story. The user can save a draft.
  if(!editing)
    return(
    <Button.Group size="large">
      <Button
        type="danger"
        size="default"
        className="CancelButton"
      >
       <Link to="/">
        <FontAwesomeIcon icon={close} size="lg" />
        &nbsp; Cancel
       </Link>
     </Button>
     <Button
       type="primary"
       size="default"
       className="AcceptButton"
       onClick={postStoryContent}
     >
      <FontAwesomeIcon icon={acceptIcon} size="lg" />
      &nbsp; {acceptText}
    </Button>
    <Button
        type="primary"
        size="default"
        onClick={postAsDraftFn}
      >
       <FontAwesomeIcon icon={saveDraftIcon} size="lg" />
       &nbsp; {draftText}
    </Button>
    </Button.Group>
    )

	// Already existing story saved as draft.
  if(isDraft)
  return(
  <Button.Group size="large">
	  	<Button
	      type="danger"
	      size="default"
	      className="CancelButton"
	    >
	     <Link to="/">
	      <FontAwesomeIcon icon={close} size="lg" />
	      &nbsp; Cancel
	     </Link>
	   </Button>
	   <Button
	     type="primary"
	     size="default"
	     className="AcceptButton"
	     onClick={postStoryContent}
	   >
	    <FontAwesomeIcon icon={acceptIcon} size="lg" />
	    &nbsp; {acceptText}
	  </Button>
	  <Button
	    type="primary"
	    size="default"
	    className="PublishDraftButton"
	    onClick={postAsDraftFn}
	  >
	   <FontAwesomeIcon icon={acceptIcon} size="lg" />
	   &nbsp; {acceptText}
	 </Button>
  </Button.Group>
  )

  // Already published story (was not saved as a draft).
  return(
  <Button.Group size="large">
		<Button
		  type="danger"
		  size="default"
		  className="CancelButton"
		>
			 <Link to="/">
			  <FontAwesomeIcon icon={close} size="lg" />
			  &nbsp; Cancel
			 </Link>
		</Button>
		<Button
		 type="primary"
		 size="default"
		 className="AcceptButton"
		 onClick={postStoryContent}
		>
			<FontAwesomeIcon icon={acceptIcon} size="lg" />
			&nbsp; {acceptText}
		</Button>
  </Button.Group>
  )

}


export default ConfirmButtons;
