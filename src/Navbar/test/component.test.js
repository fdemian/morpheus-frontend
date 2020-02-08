import React from 'react';
import Enzyme, { mount, render } from 'enzyme';
import { Drawer, Input, Avatar, Dropdown, Spin, Badge, Menu } from 'antd';
import { StaticRouter } from 'react-router';
import NoticeIcon from 'ant-design-pro/lib/NoticeIcon';

// Components.
import Navbar from '../Navbar';
import NavbarDesktop from '../NavbarDesktop';
import NavbarMobile from '../NavbarMobile';
import NavbarMenuMobile from '../Mobile/MobileMenu';
import Notifications from '../Notifications';
import SearchArea from '../SearchArea';
import AccountMenu from '../AccountMenu/AccountMenu';

import Notification from '../AccountMenu/NotificationsMenu/Notification';
import NotificationsMenuHeader from '../AccountMenu/NotificationsMenu/NotificationsMenuHeader';

describe("<Navbar />", () => {

   it("Renders <NavbarDesktop /> inside <Navbar /> component.", () => {
     const navbarComponent = mount(
      <StaticRouter >
       <Navbar mobile={false} />
      </StaticRouter>
     );
     expect(navbarComponent.contains(NavbarDesktop));
   });

   it("<NavbarDesktop />", () => {

     const props = {
       loggedIn: false,
       user: null,
       notifications: [],
       logoutFn: jest.fn(),
       dismissNotifications: jest.fn()
     };

     const navbarDesktop = mount(
      <StaticRouter >
        <NavbarDesktop {...props} />
      </StaticRouter>
     );

     const menu = navbarDesktop.find(Menu);

     expect(menu.length).toBe(1);
   })

   it("<Notifications />", () => {

     const props = {
      notifications: [{
        id: 1,
        type: "message",
        text: "Mensaje del usuario <X>"
      }],
      clearFn: jest.fn()
    };

     const notificationsComponent = mount(
      <StaticRouter >
        <Notifications {...props} />
      </StaticRouter>
     );

     expect(notificationsComponent.contains(NoticeIcon));
     expect(notificationsComponent.contains(NoticeIcon.Tab));
   })

   it("<SearchArea />", () => {
     const searchAreaComponent = mount(
      <StaticRouter >
        <SearchArea />
      </StaticRouter>
     );

     expect(searchAreaComponent.contains(Input));
   })

   it("<AccountMenu />", () => {
    const user = {
     id: 1,
     username: "test",
     name:"Joe Test",
     avatar: undefined
    }

    const props = {
      logoutFn: jest.fn(),
      user: user,
      isFetching: false
    };

    const component = mount(
     <StaticRouter>
       <AccountMenu {...props} />
     </StaticRouter>
    );

    expect(component.contains(Dropdown));
 })

 it("<Notification />", () => {

      const props = {
        notification: {
          id:1,
          read: false,
          text: "This is a notification"
        }
      };

      const component = mount(
       <StaticRouter>
         <Notification {...props} />
       </StaticRouter>
      );

      expect(component.contains(Badge));
  })

  it("<NotificationsMenuHeader /> > Disabled Notifications", () => {

       const props = {
         notifications: null,
         enabled: false
       };

       const component = mount(
        <StaticRouter>
          <NotificationsMenuHeader {...props} />
        </StaticRouter>
       );

       expect(component.contains(<span />));
   })

   it("<NotificationsMenuHeader /> > Enabled Notifications", () => {

        const props = {
          notifications: [{
            id:1,
            read: false,
            text: "This is a notification"
          }],
          enabled: true
        };

        const component = mount(
         <StaticRouter>
           <NotificationsMenuHeader {...props} />
         </StaticRouter>
        );

        expect(component.contains(<Badge />));
  })
})
