import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { Drawer, Avatar } from 'antd';

import { StaticRouter } from 'react-router';
import Composer from '../Composer';
import DrawerHeader from '../DrawerHeader';
import ComposerHeader from '../ComposerHeader';
import ComposerAvatar from '../ComposerAvatar';

import ComposerEditorHeading from '../ComposerEditorHeading';

describe("<CommentComposer />", () => {

    it("Renders <Composer />", () => {
      const props = {
        visible:true,
        user:{
          id: 15,
          username: "user",
          avatar: "avatar.jpg",
        }
      }

      const composer = mount(
      <StaticRouter>
        <Composer {...props} />
      </StaticRouter>
      );

      expect(composer.contains(ComposerHeader));
      expect(composer.contains(Drawer));
      expect(composer.contains(ComposerEditorHeading));
   })

   it("Renders <ComposerAvatar /> with guest user", () => {
     const props = {
       user:{
         id: 15,
         role: "guest",
         username: "user",
         avatar: "avatar.jpg",
       }
     }
     const composer = mount(<ComposerAvatar {...props} />);

     expect(composer.text()).toStrictEqual("user")
  })

  it("Renders <ComposerAvatar /> without avatar", () => {
    const props = {
      user:{
        id: 15,
        role: "admin",
        username: "user",
        avatar: "",
      }
    }

    const composer = mount(<ComposerAvatar {...props} />);
    expect(composer.contains(Avatar));
  })

  it("Renders <ComposerAvatar /> with admin user", () => {
      const props = {
        user:{
          id: 15,
          role: "admin",
          username: "user",
          avatar: "pic.jpg",
        }
      }

      const composer = mount(<ComposerAvatar {...props} />);
      expect(composer.contains(Avatar));
   })



})
