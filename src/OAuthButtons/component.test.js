import React from 'react';
import Enzyme, { mount } from 'enzyme';
import OauthButtons from './OauthButtons';
import OAuthButton from './OAuthButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

describe('<OauthButtons />', () => {

  it('Renders correctly', () => {

    const props = {
      services:[{
        name: "Oauth X",
        key: "56465456",
        authorizeURL: "authorization/url"
      },
      {
        name: "Oauth X2",
        key: "abdcdefgh123",
        authorizeURL: "authorization/url2"
      }],
      method: "login"
    }

   const oauthButtons = mount(<OauthButtons {...props} />);
   expect(oauthButtons.contains(OAuthButton));
  })

  it('<OAuthButton />', () => {

    const props = {
      service: {
        name: "facebook",
        key: "56465456",
        authorizeURL: "authorization/url"
      },
      method: "login",
      icons: BrandIcons
    }

   const oauthButtons = mount(<OAuthButton {...props} />);
   expect(oauthButtons.contains(FontAwesomeIcon));
  })

})
