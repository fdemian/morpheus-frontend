import React from 'react';
import Enzyme, { mount, render } from 'enzyme';
import { StaticRouter } from 'react-router';
import { Form, Input, Button, Avatar, Upload } from 'antd';
import user, { noAvatarUser } from './data';
import Profile from '../Profile';
import AvatarUpload from '../AvatarUpload';

describe("<Profile />", () => {

    it("Renders correctly.", () => {
     const props = {
       user: user,
       isFetching: false,
       postFile: jest.fn(),
     };
     const component = mount(<Profile {...props} />);
     const formComponent = component.find('.left').find(Form);
     expect(formComponent.length).toBe(1);
    })

    it("<AvatarUpload>", () => {
     const props = { postFile: jest.fn()};
     const component = mount(<AvatarUpload {...props} />);
     const uploadComponent = component.find(Upload);
     expect(uploadComponent.length).toBe(1);
    })

});
