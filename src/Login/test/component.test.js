import React from 'react';
import Enzyme, { mount, render } from 'enzyme';
import { StaticRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Alert , Input} from 'antd';

import Login from '../Login';
import Loading from '../../Loading/LoadingIndicator';

describe("<Login />", () => {

   it("loggedIn", () => {

     const props = {
       loggedIn: true,
       oauthServices: [],
       loading: false,
       authenticate: true,
       register: false,
       match:{
        params: {
         method: "login"
        }
       }
     };

     const component = mount(
     <StaticRouter>
       <Login {...props} />
     </StaticRouter>
     );

    const redirect = component.find(Redirect);

    expect(redirect.length).toBe(1);

    })

    it("loading", () => {

      const props = {
        loggedIn: false,
        oauthServices: [],
        loading: true,
        authenticate: true,
        register: false,
        match:{
         params: {
          method: "login"
         }
        }
      };

      const component = mount(
      <StaticRouter>
        <Login {...props} />
      </StaticRouter>
      );
      const loading = component.find(Loading);

      expect(loading.length).toBe(1);
    })

    it("Login Component", () => {

      const props = {
        loggedIn: false,
        oauthServices: [],
        loading: false,
        authenticate: true,
        register: false,
        match:{
         params: {
          method: "login"
         }
        }
      };

      const component = mount(
      <StaticRouter>
        <Login {...props} />
      </StaticRouter>
      );
      // TODO
      //const formComponent = component.find('.left').find(Form);
      //expect(formComponent.length).toBe(1);
    })
});
