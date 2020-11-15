import React from 'react';
import { render, screen , waitFor } from '../../utils/testing-utils';
import '@testing-library/jest-dom/extend-expect';

import Login from '../Login';
import Loading from '../../Loading/LoadingIndicator';

import { newLogin, useUser } from '../Actions';
import { isLoggedIn, logout, setLoginData} from '../utils';

describe("<Login />", () => {

   /*
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

     const { getByText } = render(<Login {...props} />);

    const redirect = component.find(Redirect);

    expect(redirect.length).toBe(1);

  })*/

    /*
    it("loading", () => {

      jest.mock('../Actions', () => ({
        useUser: () => ({
          user: {},
          error: false,
          isLoading: true,
          mutate: jest.fn()
        })
      }));

      jest.mock('../Actions', () => ({
        useUser: () => ({
          user: {},
          error: false,
          isLoading: true,
          mutate: jest.fn()
        })
      }));

      const { getByText } = render(<Login />);

      console.log(getByText('boia'));
    })*/

    it("Login Component", () => {

      jest.mock('../Actions', () => ({
        isLoggedIn: () => false,
        logout: jest.fn(),
        setLoginData: jest.fn()
      }));

      jest.mock('../Actions', () => ({
        useUser: () => ({
          user: {},
          error: false,
          isLoading: false,
          mutate: jest.fn()
        })
      }));

      const { getByRole, getByText } = render(<Login />);

      console.log(getByText('boia'));

      expect(getByRole('form')).toHaveFormValues({
          username: '',
          password: '',
        })

      // TODO
      //const formComponent = component.find('.left').find(Form);
      //expect(formComponent.length).toBe(1);
    })
});
