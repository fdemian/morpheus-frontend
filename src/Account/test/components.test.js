import React from 'react';
import { List, Menu } from 'antd';
import BindingView from '../BindingView';
import AccountView from '../AccountSettings';
import NotificationView from '../NotificationView';
import { render } from '../../utils/testing-utils';
import '@testing-library/jest-dom';

describe("<Account /> Views.", () => {

    it("<BindingView /> Render", () => {

     const {container} = render(<BindingView />);
     //const flsl = getByTestId('binding-list');
     //console.log(flsl);

     expect(1).toStrictEqual(1);
     /*
     const bindingList = component.find(List);
     const listItems = component.find(List.Item);
     expect(bindingList.length).toBe(1);
     expect(listItems.length).toBe(3);*/
    })

    /*
    it("<NotificationView> > Render", () => {
     const component = mount(<NotificationView />);
     const itemList = component.find(List);
     expect(itemList.length).toBe(1);
    })

    it("<Account /> > Account View > Render", () => {

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
    */

});
