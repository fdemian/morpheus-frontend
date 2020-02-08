import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from '../../Avatar/Avatar';
import SocialLinks from '../../SocialLinks/SocialLinks';
import Stories from '../../Stories/Stories';
import User from '../User';

describe('<User />', () => {

  it('Renders correctly.', () => {

    const componentProps = {
      stories: [],
      isFetching: false,
      error: false,
      user: {
        name: 'user',
        username: 'user',
        avatar: 'avatar.jpg'
      }
    };

    const component = mount(<User {...componentProps} />);
    expect(component.contains(Avatar));
    expect(component.contains(SocialLinks));
    expect(component.contains(Stories));
  })

});
