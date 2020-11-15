import React from 'react';
import OauthButtons from './OauthButtons';
import OAuthButton from './OAuthButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { render, screen  } from '../utils/testing-utils';
import '@testing-library/jest-dom/extend-expect';

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

describe('Oauth', () => {

  it('<OauthButtons />', () => {

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

   const { getAllByTestId } = render(<OauthButtons {...props} />);

   expect(getAllByTestId('oauth-buttons').length).toBe(2);

   //expect(oauthButtons.contains(OAuthButton));
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

   const { getByRole } = render(<OAuthButton {...props} />);
   expect(getByRole('link')).toBeTruthy();
  })

})
