import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import { Drawer, Avatar } from 'antd';

import { StaticRouter } from 'react-router';
import { BackTop } from 'antd';

import Story from '../Story';
import StoryTitle from '../StoryTitle';
import StoryText from '../StoryText';
import Comments from '../../Comments/Comments';
import StoryFooter from '../StoryFooter';
import CommentSpace from '../CommentSpace';
import LoadingIndicator from '../../Loading/LoadingIndicator';
import CommentLogin from '../../Comments/CommentLogin';
import AnonymousUserForm from '../AnonymousUserForm';
import CommentComposer from '../../CommentComposer/Container';

import storyData from './data';

describe("<Story />", () => {

    it("Renders <Story />", () => {

      const props = {
        story: storyData,
        isFetching: false,
        loggedIn: false,
        oauthServices: [],
        commentOptions: "OFF",
        setAnonymousUser: jest.fn(),
        userExists: false
      };

      const component = mount(
      <StaticRouter>
        <Story {...props} />
      </StaticRouter>
      );

      const backTop = component.find(BackTop);
      const storyTitle = component.find(StoryTitle);
      const storyText = component.find(StoryText);
      const storyFooter = component.find(StoryFooter);
      const commentSpace = component.find(CommentSpace);
      const commentComponent = component.find(Comments);

      expect(backTop.length).toBe(1);
      expect(storyTitle.length).toBe(1);
      expect(storyText.length).toBe(1);
      expect(storyFooter.length).toBe(1);
      expect(commentSpace.length).toBe(1);
      expect(commentComponent.length).toBe(1);
   })

   it("<CommentSpace /> > User does not exist > Logged out", () => {

     const props = {
       loggedIn: false,
       storyTitle: storyData.title,
       storyId: storyData.id,
       oauthServices: [],
       commentOptions: "ANONYMOUS",
       setAnonymousUser: jest.fn(),
       userExists: false
      };

     const component = mount(<CommentSpace {...props} />);

     const userForm = component.find(AnonymousUserForm);
     const commentLogin = component.find(CommentLogin);

     expect(userForm.length).toBe(1);
     expect(commentLogin.length).toBe(1);
  })


     it("<CommentSpace /> > User exists > Logged in", () => {

       const props = {
         loggedIn: true,
         storyTitle: storyData.title,
         storyId: storyData.id,
         oauthServices: [],
         commentOptions: "ANONYMOUS",
         setAnonymousUser: jest.fn(),
         userExists: true
        };

       const component = shallow(<CommentSpace {...props} />);

       const composer = component.find(CommentComposer);

       expect(composer.length).toBe(1);
    })

    it("<CommentSpace /> > User exists > Not logged in", () => {

       const props = {
         loggedIn: false,
         storyTitle: storyData.title,
         storyId: storyData.id,
         oauthServices: [],
         commentOptions: "ANONYMOUS",
         setAnonymousUser: jest.fn(),
         userExists: true
       };

       const component = shallow(<CommentSpace {...props} />);
       const commentLogin = component.find(CommentLogin);
       const composer = component.find(CommentComposer);

       expect(composer.length).toBe(1);
       expect(commentLogin.length).toBe(1);
    })

    it("<CommentSpace /> > Loading", () => {

       const props = {
         loggedIn: false,
         storyTitle: storyData.title,
         storyId: storyData.id,
         oauthServices: [],
         commentOptions: null,
         setAnonymousUser: jest.fn(),
         userExists: false
       };

       const component = render(<CommentSpace {...props} />);
       const loadingIndicator = component.find(<LoadingIndicator />);

       expect(component.children()[0].attribs.class)
       .toStrictEqual('ant-spin-nested-loading');
    })

    it("<AnonymousUserForm />", () => {

       const props = { setUser: jest.fn() };
       const component = mount(<AnonymousUserForm {...props} />);
       const toggle = component.find('.CommentAnonymousToggle');

       const clicked = toggle.simulate('click');

       //TODO: get component after simulated click.
    })

})
