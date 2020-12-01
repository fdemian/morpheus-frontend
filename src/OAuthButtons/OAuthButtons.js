import React from 'react';
import OAuthButton from './OAuthButton';
import {
  faFacebook,
  faTwitter,
  faGithub,
  faGoogle
} from '@fortawesome/free-brands-svg-icons';

const BrandIcons = [
  faFacebook,
  faTwitter,
  faGithub,
  faGoogle
];

const OAuthButtons = ({services, method}) => {

  return(
  <div>
    {services.map((service, i) =>
     <span key={i} data-testid="oauth-buttons">
       <OAuthButton
          service={service}
          method={method}
          icons={BrandIcons}
       />
     </span>
     )}
	</div>
  );
}

export default OAuthButtons;
