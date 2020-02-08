import React from 'react'
import LinkIcon from './LinkIcon';
import './SocialLinks.css';

const SocialLinks = ({links}) => {

  return(
  <span className="SocialLinksContainer">
    {links.map((service, i) =>
	   <span key={i}>
	    <LinkIcon service={service} />
	   </span>
	   )}
  </span>
  );

}

export default SocialLinks;
