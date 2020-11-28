import React from 'react';
import { StaticRouter } from 'react-router';
import { useMediaQuery } from 'react-responsive';
import { Form, Input, Button, Avatar, Upload } from 'antd';
import Profile from '../Profile';
import { render } from '../../../utils/testing-utils';
import AvatarUpload from '../AvatarUpload';
import AvatarModify from '../AvatarModify';

import user, { noAvatarUser } from './data';

jest.mock('react-responsive', () => ({
  useMediaQuery: (query) => false
}));

describe("<Profile />", () => {

    it("Renders correctly.", () => {

     const props = {
       user: user,
       isFetching: false,
       postFile: jest.fn()
     };

     const { getByTestId } = render(<Profile {...props} />);
     const formComponent = getByTestId('profile-form');
     //expect(formComponent).toBeTruthy(); // This should exist.
    })

    it("<AvatarUpload>", () => {
     const props = { postFile: jest.fn()};
     const { getByTestId } = render(<AvatarUpload {...props} />);
     const uploadComponent = getByTestId('upload-component');
     expect(uploadComponent).toBeTruthy();
    })


    it("<AvatarModify> -> Upload", () => {
     const props = {
        user: user,
        postFile: jest.fn(),
        isFetching: true
      };
     const { getByTestId } = render(<AvatarModify {...props} />);
     const uploadComponent = getByTestId('upload-component');
     expect(uploadComponent).toBeTruthy();
    })

    it("<AvatarModify> -> Show user", () => {
     const props = {
        user: user,
        postFile: jest.fn(),
        isFetching: null
     };

     const { getByRole } = render(<AvatarModify {...props} />);

     const img = getByRole('img');
     expect(img).toHaveAttribute('src', `/static/avatars/${user.avatar}`);
     expect(img).toHaveAttribute('alt', `Avatar for ：${user.username}`);
    })

});
