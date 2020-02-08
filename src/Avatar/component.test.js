import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Avatar from './Avatar';

describe('<Avatar /> ', () => {

  it('Render without username.', () => {

   const props = {
     src: 'avatar.png',
     username: null,
     size: '40px'
   };

   const noUsernameImage = mount(<Avatar {...props} />);
   const image = noUsernameImage.find('img');
   const imageProps = image.props();

   expect(imageProps.src).toBe('avatar.png');
   expect(imageProps.width).toBe('40px');
   expect(imageProps.height).toBe('40px');
   expect(imageProps.alt).toBe(null);
   expect(imageProps.className).toBe('Avatar');
  })

  it('Render with username .', () => {

   const props = {
     src: 'avatar.png',
     username: 'username',
     size: '40px'
   };

   const usernameImage = mount(<Avatar {...props} />);
   const image = usernameImage.find('img');
   const avatarText = usernameImage.find('.AvatarText');
   const imageProps = image.props();

   expect(imageProps.src).toBe('avatar.png');
   expect(imageProps.width).toBe('40px');
   expect(imageProps.height).toBe('40px');
   expect(imageProps.alt).toBe('username');
   expect(imageProps.className).toBe('Avatar');

   expect(avatarText.length).toBe(1);
   expect(avatarText.props().children).toBe('username');

  })


})
