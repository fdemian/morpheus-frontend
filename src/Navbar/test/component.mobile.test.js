import React from 'react';
import Navbar from '../Navbar';
import { render, fireEvent, act, waitFor} from '../../utils/testing-utils';
import '@testing-library/jest-dom/extend-expect';

describe("<Navbar /> > Mobile", () => {

  describe("<NavbarDesktop />", () => {

     it("Not logged in.", () => {

       const navProps = {
         mobile: true,
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
          expect(getByText('adminuser')).toBeInTheDocument();
       })

     })

     it("Loading.", () => {

       const navProps = {
         mobile: true,
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

       waitFor(() => {
          expect(getByText('Morpheus')).toBeInTheDocument();
          expect(getByRole('img')).toBeInTheDocument();
          expect(getByText('Login')).toBeInTheDocument();
        });

     })

     it("Logged in.", () => {

       const navProps = {
         mobile: true,
         config: {},
         user: {
           id: 1,
           user: "adminuser",
           avatar: "avatar.png"
         },
         loggedIn: true,
         isFetching: false,
         blogName: "Morpheus",
         notificationsEnabled: false,
         notifications: [],
         mutateUser: jest.fn()
       };

       const { getByText, getByRole } = render(<Navbar {...navProps} />);

       waitFor(() => {
          expect(getByText('Morpheus')).toBeInTheDocument();
          expect(getByRole('img')).toBeInTheDocument();
          expect(getByText('Login')).not.toBeInTheDocument();
          expect(getByText('adminuser')).toBeInTheDocument();
       })

     })

  })

})
