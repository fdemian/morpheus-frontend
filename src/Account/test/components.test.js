import React from 'react';
import { List, Menu } from 'antd';
import AccountSettings from '../AccountSettings';

/*
import BindingView from '../BindingView';
import AccountView from '../AccountSettings';
import NotificationView from '../NotificationView';*/
import { render, waitFor, fireEvent } from '../../utils/testing-utils';
import '@testing-library/jest-dom';

const loginUtils = require('../../Login/utils');
const loginActions = require('../../Login/Actions');

describe("<Account /> Views.", () => {

    it("Renders default view", async () => {

     jest.spyOn(loginUtils, "getLoginData").mockImplementation(() => {1});
     jest.spyOn(loginActions, "useUser").mockImplementation(() => ({
        user: {
          id: 1,
          username: "ocelot",
          name: "ocelot",
          avatar: "avatar.png"
        },
        error: false,
        isLoading: false,
        mutate: jest.fn()
     }));

     const { debug, getAllByText } = render(<AccountSettings />);
     //const flsl = getByTestId('binding-list');
     //console.log(flsl);

     await waitFor(() => {
        const items = getAllByText('Profile', { hidden: true});
        expect(items[1]).toHaveClass("title");
     })
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
