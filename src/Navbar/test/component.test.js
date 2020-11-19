import React from 'react';
import Navbar from '../Navbar';
import { render, fireEvent, act, waitFor} from '../../utils/testing-utils';
import '@testing-library/jest-dom/extend-expect';

describe("<NavbarDesktop />", () => {

   it("Not logged in.", () => {

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

     waitFor(() => {
        expect(getByText('Morpheus')).toBeInTheDocument();
        expect(getByRole('img')).toBeInTheDocument();
        expect(getByText('Login')).toBeInTheDocument();
      });
      
   });

   it("Loading.", () => {

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

     const { getByText, getByRole, debug } = render(<Navbar {...navProps} />);

     waitFor(() => {
        expect(getByText('Morpheus')).toBeInTheDocument();
        expect(getByRole('img')).toBeInTheDocument();
        expect(getByText('Login')).toBeInTheDocument();
      });

   });

   it("Logged in.", () => {

     const navProps = {
       mobile: false,
       config: {},
       user: {
         username: "adminuser",
         avatar: "avatar.png"
       },
       loggedIn: true,
       isFetching: false,
       blogName: "Morpheus",
       notificationsEnabled: false,
       notifications: [],
       mutateUser: jest.fn()
     };

     const { getByText, getByRole, debug } = render(<Navbar {...navProps} />);

     waitFor(() => {
       expect(getByText('Morpheus')).toBeInTheDocument();
       expect(getByRole('img')).toBeInTheDocument();
       expect(getByText('Login')).not.toBeInTheDocument();
       expect(getByText('adminuser')).toBeInTheDocument();
     })

   });

})
