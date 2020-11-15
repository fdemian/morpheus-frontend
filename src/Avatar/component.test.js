import React from 'react';
import Avatar from './Avatar';
import { render, screen } from '../utils/testing-utils';
import '@testing-library/jest-dom/extend-expect';

describe('<Avatar /> ', () => {

  it('Render without username.', () => {

   const props = {
     src: 'avatar.png',
     username: null,
     size: '40px'
   };

   const { getByRole } = render(<Avatar {...props} />);
   const noUsernameImage = getByRole('img');

   expect(noUsernameImage).toBeTruthy();
   expect(noUsernameImage.src).toStrictEqual("http://localhost/avatar.png");
   expect(noUsernameImage.alt).toStrictEqual("");
   //expect(noUsernameImage.width).toStrictEqual("40");
   //expect(noUsernameImage.height).toStrictEqual("40");
  });

  it('Render with username .', () => {

   const props = {
     src: 'avatar.png',
     username: 'username',
     size: '40px'
   };

   const { getByText, getByRole } = render(<Avatar {...props} />);
   const usernameSpan = getByText('username');
   const usernameImage = getByRole('img');

   expect(usernameSpan).toBeTruthy();
   expect(usernameImage.src).toStrictEqual("http://localhost/avatar.png");
   expect(usernameImage.alt).toStrictEqual("username");
   //expect(usernameImage.width).toBe('40px');
   //expect(usernameImage.height).toBe('40px');
  });

})
