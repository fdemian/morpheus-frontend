import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from '../../Avatar/Avatar';
import SocialLinks from '../../SocialLinks/SocialLinks';
import Stories from '../../Stories/Stories';
import User from '../User';

import { render } from '../../utils/testing-utils';
import '@testing-library/jest-dom/extend-expect';


const loginActions = require("../../Login/Actions.js");
const actions = require("../Actions.js");

describe('<User />', () => {


  it('Renders correctly.', () => {

    jest.spyOn(loginActions, 'useUser').mockImplementation((id) => ({
      user: {
        user: {
          id: 1,
          username: "ocelot",
          name: "ocelot",
          avatar: ""
        }
      },
      mutate: null,
      isLoading: false,
      error: false
    }));

    jest.spyOn(actions, 'useUserStories').mockImplementation((id) => ({
      userStories: {
        stories: [
         {
          id: "1",
          title: "title",
          name: "Mega Story",
          content: "",
          date: "2019-07-21 20:57:24.238995",
          author: {
            id: 1,
            username: "ocelot",
            name: "ocelot",
            avatar: "ocelot.png"
          }
         }
         ]
        }
    }));

    const componentProps = { match: {params : { id: 1 } } };

     const { getByText } = render(<User {...componentProps} />);

     expect(getByText("ocelot")).toHaveClass('UserName');
     expect(getByText("Mega Story")).toHaveClass("StoryLinkTitle");
  })

  it('Renders loading screen', () => {

    jest.spyOn(loginActions, 'useUser').mockImplementation((id) => ({
      user: null,
      mutate: null,
      isLoading: true,
      error: false
    }));

    jest.spyOn(actions, 'useUserStories').mockImplementation((id) => ({
      userStories: {
        stories: [
         {
           id: "1",
           title: "title",
           name: "Mega Story",
           content: "",
           date: "2019-07-21 20:57:24.238995",
           author: {
             id: 1,
             username: "ocelot",
             avatar: ""
           }
         }
       ]
     },
     error: false,
     isLoading: true
    }));

    const componentProps = { match: {params : { id: 1 } } };
    const { getByText } = render(<User {...componentProps} />);

    expect(getByText("Loading...")).toHaveClass("ant-spin-text");
  });


});
