import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck as check,
  faTimes as close,
  faComment as commentIcon
} from '@fortawesome/free-solid-svg-icons';
import { Button, Input } from 'antd';
import './Story.css';

const AnonymousUserForm = ({setUser}) => {

  const [formVisible, setFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const user = {
    id: 1,
    avatar: null,
    username: name,
    fullname: null,
    email: null,
    role: "guest",
    link: url,
    signature:null,
    about: null,
    loaded: true
  };

  if(!formVisible)
  return(
  <div className="CommentAnonymousToggle" onClick={() => setFormVisible(true)}>
    <span className="ComposerToggleText">
      <FontAwesomeIcon icon={commentIcon} size="lg" />
      &nbsp; Comment anonymously
    </span>
  </div>
  )

  if(formVisible){
  return(
  <Fragment>

    <div>
      <h3>Posting as...</h3>
    </div>

    <div>
      <Input
         placeholder="Name (required)"
         onChange={(e) => setName(e.target.value)}
         className="FormInput FromInputLeft NameInput"
       />
       <br />
       <Input
          placeholder="URL (optional)"
          onChange={(e) => setUrl(e.target.value)}
          className="FormInput FromInputLeft URLInput"
        />
    </div>

    <div>
      <Button
        onClick={() => setFormVisible(false)}
      >
        <FontAwesomeIcon icon={close} size="lg" />
        &nbsp; Cancel
      </Button>
      &nbsp;
      <Button
        onClick={() => setUser(user)}
       >
         <FontAwesomeIcon icon={check} size="lg" />
         &nbsp; Confirm
       </Button>
     </div>

   </Fragment>
   )

  }

}

export default AnonymousUserForm;
