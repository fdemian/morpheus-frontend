import React from 'react';
import './Composer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const ComposerHeader = ({toggle}) => (
  <div className="ComposerToggle" onClick={toggle}>
    <span className="ComposerToggleText">
      <FontAwesomeIcon icon={faEdit} size="lg" />
      Write a response
    </span>
  </div>
)

export default ComposerHeader;
