import React from 'react';
import { StaticRouter } from 'react-router';
import { Route } from 'react-router';
import AdminRoute from './AdminRoute';
import { render, screen  } from '../utils/testing-utils';
import '@testing-library/jest-dom/extend-expect';

const utils = require('../Login/utils');

describe("<AdminRoute />", () => {

   it("AdminRoute redirects to component.", () => {
     jest.spyOn(utils, 'isLoggedIn').mockImplementation(() => (true));
     const props = {component: () => <p>Component Test</p> };
     const { getByText } = render(<AdminRoute {...props} />);
     expect(getByText('Component Test')).toBeInTheDocument();

   })

   it("AdminRoute does not redirect to component.", () => {
     jest.spyOn(utils, 'isLoggedIn').mockImplementation(() => (false));
     const props = { component: () => <p>Component Test</p> };
     const { queryByText } = render(<AdminRoute {...props} />);
     expect(queryByText('Component Test')).not.toBeTruthy();
   })
})
