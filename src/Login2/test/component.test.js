import React from 'react';
import Enzyme, { mount, render } from 'enzyme';
import { StaticRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Alert , Input} from 'antd';
import { Submit } from 'ant-design-pro/lib/Login';

import Login from '../Login';
import Loading from '../../Loading/LoadingIndicator';
import LoginError from '../Login/LoginError';
import LoginTab from '../Login/LoginTab';
import RegisterTab from '../Register/RegisterTab';

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

    it("<LoginError />", () => {


        const component = mount(
        <StaticRouter>
          <LoginError error={true} />
        </StaticRouter>
        );

      const alert = component.find(Alert);
      expect(alert.length).toBe(1);
    })

    it("<LoginTab />", () => {

      const props =  {
        usernameChange: jest.fn(),
        passwordChange: jest.fn(),
        oauthServices: [],
      };

      const component = mount(
      <StaticRouter>
        <LoginTab {...props} />
      </StaticRouter>
      );

      const input = component.find(Input);
      expect(input.length).toBe(2);
    })

    it("<RegisterTab />", () => {

      const props =  {
        oauthServices: [],
        emailChange: jest.fn(),
        usernameChange: jest.fn(),
        passwordChange: jest.fn(),
        passwordRepeatChange: jest.fn(),
        registered: false,
        data: {
          password: ""
        }
      };

      const component = mount(
      <StaticRouter>
        <RegisterTab {...props} />
      </StaticRouter>
      );

      const input = component.find(Input);
      const submitBtn = component.find(Submit);

      expect(input.length).toBe(4);
      expect(submitBtn.length).toBe(1);
    })


        it("<RegisterTab /> > Registered", () => {

          const props =  {
            oauthServices: [],
            emailChange: jest.fn(),
            usernameChange: jest.fn(),
            passwordChange: jest.fn(),
            passwordRepeatChange: jest.fn(),
            registered: true,
            data: {
              password: ""
            }
          };

          const component = mount(
          <StaticRouter>
            <RegisterTab {...props} />
          </StaticRouter>
          );

          const link = component.find(Link);

          expect(link.length).toBe(1);
        })
});
