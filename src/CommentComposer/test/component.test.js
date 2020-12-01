import React from 'react';
import { Drawer, Avatar } from 'antd';
import Composer from '../Composer';
import  { render, waitFor } from '../../utils/testing-utils';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

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

      const { debug } = render(<Composer {...props} />);

      debug()

      //expect(composer.contains(ComposerHeader));
      //expect(composer.contains(Drawer));
      //expect(composer.contains(ComposerEditorHeading));
   })

  /* it("Renders <ComposerAvatar /> with guest user", () => {
     const props = {
       user:{
         id: 15,
         role: "guest",
         username: "user",
         avatar: "avatar.jpg",
       }
     }
     const composer = mount(<ComposerAvatar {...props} />);
     const avatarText = composer.find('.AvatarText');

     expect(avatarText.props().children).toBe("user");
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
   })*/



})
