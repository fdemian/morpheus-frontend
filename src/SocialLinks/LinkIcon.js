import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkIcon = ({service}) => {

  return(
  <span className="Icon">
	  <a
      href={service.url}
      target="_blank"
      rel="noopener noreferrer"
      className="Icon IconLink"
    >
	    <FontAwesomeIcon icon={service.name} size="2x" />
	  </a>
  </span>
  );

};

export default LinkIcon;
