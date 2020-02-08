import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialLinks from './SocialLinks';
import LinkIcon from './LinkIcon';

const shareLinks = [
  { url:"http://url.com", name: "twitter" },
  { url:"http://url.com", name: "facebook" }
];

describe('<SocialLinks />', () => {

  // Basic rendering test.
  it('Renders correctly.', () => {
   const component = mount(<SocialLinks links={shareLinks} />);
   const linkIcons = component.find(LinkIcon);
   expect(linkIcons.length).toBe(2);
  })

  it('Renders <LinkIcon />', () => {
   const shareLink = shareLinks[0];
   const component = mount(<LinkIcon service={shareLink} />);
   const iconComponent = component.find(FontAwesomeIcon);
   expect(iconComponent.length).toBe(1);
  });

});
