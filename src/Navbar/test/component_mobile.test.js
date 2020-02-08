import React from 'react';
import Enzyme, { mount, render } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, Input, Avatar , Menu} from 'antd';
import { StaticRouter } from 'react-router';

import Navbar from '../Navbar';
import NavbarMobile from '../NavbarMobile';
import NavbarMenuMobile from '../Mobile/MobileMenu';

import NotificationsHeader from '../Mobile/NotificationsHeader';
import LoginMenu from '../Mobile/LoginMenu';
import AccountMenu from '../Mobile/AccountMenu';
import MobileMenu from '../Mobile/MobileMenu';

describe("<Navbar /> > Mobile", () => {

   it("Renders <NavbarMobile /> inside <Navbar /> component.", () => {
     const navbarComponent = mount(
      <StaticRouter >
       <Navbar mobile={true} />
      </StaticRouter>
     );
     expect(navbarComponent.contains(NavbarMobile));
   })

   it("<NavbarMobile />", () => {

      const props = {
        loggedIn: true,
        user: {
          id: 24,
          name: "Test user",
          avatar: null,
        },
        notifications: [],
        notificationsEnabled: true,
        logoutFn: jest.fn(),
        dismissNotifications: jest.fn()
      };

      const navbarMobile = mount(
       <StaticRouter >
         <NavbarMobile {...props} />
       </StaticRouter>
      );

     expect(navbarMobile.contains(Drawer));
     expect(navbarMobile.contains(NavbarMenuMobile));
   })

   it("<NotificationsHeader />", () => {

     const props = {
      notification: {
        id: 1,
        type: "message",
        text: "Mensaje del usuario <X>",
        read: false
      }
    };

     const component = mount(
      <StaticRouter >
        <NotificationsHeader {...props} />
      </StaticRouter>
     );

     expect(component.contains(FontAwesomeIcon));
   })

   it("<NotificationsHeader />", () => {

     const props = { setDrawerVisible: jest.fn() };

     const component = mount(
      <StaticRouter >
        <LoginMenu {...props} />
      </StaticRouter>
     );

     expect(component.contains(FontAwesomeIcon));
   })


   it("<AccountMenu />", () => {

     const props = {
       notificationsEnabled: jest.fn(),
       notifications: [],
       logoutFn: jest.fn(),
       setDrawerVisible: jest.fn()
     };

     const component = mount(
      <StaticRouter >
        <AccountMenu {...props} />
      </StaticRouter>
     );

     expect(component.contains(Menu));
     expect(component.contains(Menu.Item));
     expect(component.contains(NotificationsHeader));
   })

   it("<MobileMenu /> > Logged in", () => {

        const props = {
          logoutFn: jest.fn(),
          loggedIn: true,
          clearFn: jest.fn(),
          setDrawerVisible: jest.fn(),
          notifications: [],
          notificationsEnabled: true,
          user: {
            id:1,
            username: "test",
            name: "Joe Test",
            avatar: undefined
          }
        };

        const component = mount(
         <StaticRouter >
           <MobileMenu {...props} />
         </StaticRouter>
        );

        expect(component.contains(AccountMenu));

      })


      it("<MobileMenu /> > Logged out", () => {

        const props = {
          logoutFn: jest.fn(),
          loggedIn: false,
          clearFn: jest.fn(),
          setDrawerVisible: jest.fn(),
          notifications: [],
          notificationsEnabled: true,
          user: null
        };

        const component = mount(
         <StaticRouter >
            <MobileMenu {...props} />
         </StaticRouter>
        );

        expect(component.contains(LoginMenu));
      })

})
