import React from 'react';
import configureMockStore from 'redux-mock-store';
import Enzyme, { mount } from 'enzyme';
import { StaticRouter } from 'react-router';
import { Route } from 'react-router';
import AdminRoute from './AdminRoute';

const mockStore = configureMockStore();

const initialState = {
  session: {
    loggedIn: true,
    user: {
      role: 'admin'
    }
  }
};

describe("<AdminRoute />", () => {

  const store = mockStore(initialState);

   it("AdminRoute redirects.", () => {
     const component = mount(
      <StaticRouter >
       <AdminRoute store={store} />
      </StaticRouter>
     );

     expect(component.contains(Route));
   })

})
