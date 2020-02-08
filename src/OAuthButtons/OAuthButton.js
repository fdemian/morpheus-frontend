import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Icon.css';

function getAuthorizationURL(service, method) {

  const authParams = '&scope=email&display=page&response_type=code&redirect_uri=';
  const urlParams = "/auth?method=" + method;
  const redirectURL = window.location.protocol + "//" + window.location.host + urlParams;
  const redirectTo = redirectURL + "&state=" + service.name.toLowerCase();
  const authUrl = service.authorizeURL + service.key + authParams + redirectTo + "&";

  return authUrl;
}

const OAuthButton = ({method, service, icons}) => {

  const url = getAuthorizationURL(service, method);
  const iconClass = "OAuthIcon " + service.name;
  const brandIcon = icons.find(i => i.iconName === service.name);

  if(brandIcon === undefined)
    return null;

  return(
  <span className={iconClass}>
    <a href={url}>
      <FontAwesomeIcon icon={brandIcon} size="4x" />
    </a>
  </span>
  );
}

export default OAuthButton;
