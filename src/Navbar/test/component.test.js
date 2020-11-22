import React from 'react';
import Navbar from '../Navbar';
import { render, fireEvent, act, waitFor} from '../../utils/testing-utils';
import '@testing-library/jest-dom/extend-expect';

describe("<NavbarDesktop />", () => {

   beforeAll(() => {
     console.error = (msg) => {}; //no-op
   })

   it("Not logged in.", async () => {

     const navProps = {
       mobile: false,
       config: {},
       user: null,
       loggedIn: false,
       isFetching: false,
       blogName: "Morpheus",
       notificationsEnabled: false,
       notifications: [],
       mutateUser: jest.fn()
     };

     const { getByText, getByRole, debug } = render(<Navbar {...navProps} />);

     await waitFor(() => {
        expect(getByRole('img')).toBeInTheDocument();
        expect(getByText('Login')).toBeInTheDocument();
      });

   })

   it("Loading.", async () => {

     const navProps = {
       mobile: false,
       config: {},
       user: null,
       loggedIn: false,
       isFetching: true,
       blogName: "Morpheus",
       notificationsEnabled: false,
       notifications: [],
       mutateUser: jest.fn()
     };

     const { getByText, getByRole } = render(<Navbar {...navProps} />);

     /*
     await waitFor(() => {
        expect(getByText('loading')).toBeInTheDocument();
      });*/

   })

   it("Logged in.", async () => {

     const navProps = {
       mobile: false,
       config: {},
       user: {
         id: 1,
         username: "adminuser",
         avatar: "avatar.png"
       },
       loggedIn: true,
       isFetching: false,
       blogName: "Morpheus",
       notificationsEnabled: true,
       notifications: [{
         id: 1,
         link: "",
         text: "MR.X has commented on your story.",
         read: false
       }],
       mutateUser: jest.fn()
     };

     const { getByText, getAllByRole } = render(<Navbar {...navProps} />);

     await waitFor(() => {

       const images = getAllByRole('img');
       const altText = navProps.blogName + " logo";

       const blogImage = images[0];
       const userImage = images[1];

       // Test blog image.
       expect(blogImage).toHaveAttribute("alt", altText);

       // Test user image.
       expect(userImage).toHaveAttribute("src", `/static/avatars/${navProps.user.avatar}`);
       expect(userImage).toHaveAttribute("alt", `Avatar for ：${navProps.user.username}`);

       expect(getByText('adminuser')).toBeInTheDocument();

       /*
       const bellButton = getByRole('button');
       fireEvent.click(bellButton, { bubble: true});

       debug()*/

       //console.log(getByText(navProps.notifications[0].text));
     })

   })



})
