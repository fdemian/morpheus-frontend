import React from 'react';
import Enzyme, { mount, render } from 'enzyme';
import { List, Menu } from 'antd';

import BindingView from '../BindingView';
import AccountView from '../Info';
import NotificationView from '../NotificationView';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

describe("<Account /> Views.", () => {

    it("<BindingView /> Render", () => {
     const component = mount(<BindingView />);
     const bindingList = component.find(List);
     const listItems = component.find(List.Item);

     expect(bindingList.length).toBe(1);
     expect(listItems.length).toBe(3);
    })

    it("<NotificationView> > Render", () => {
     const component = mount(<NotificationView />);
     const itemList = component.find(List);
     expect(itemList.length).toBe(1);
    })

    it("<Account /> > BaseView > Render", () => {

      const initialState = {
        session: {
          loggedIn : true,
          user: {
            id: 13,
            avatar: "pic.png",
            username: "admin",
            fullname: "",
            email: "test@gmail.com",
            role: "author",
            link: "/users/13/admin",
            signature: "Base signature.",
            about: "Base man.",
            loaded: true
          }
         }
      };
      const mockStore = configureMockStore(initialState);
      const store = mockStore(initialState);

      const component = mount(
      <Provider store={store}>
        <AccountView />
      </Provider>
      );
      const compMenu = component.find(Menu);
      const items = compMenu.find(Menu.Item);

      expect(compMenu.length).toBe(1);
      expect(items.length).toBe(2);
    })

});
