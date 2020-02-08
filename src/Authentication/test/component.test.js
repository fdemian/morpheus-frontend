import React from 'react';
import Enzyme, { mount } from 'enzyme';
import AuthenticationError from '../AuthenticationError';
import AuthenticationScreen from '../Authentication';
import { Alert } from 'antd';

describe("<Authentication />", () => {

   it("<AuthenticationError /> ", () => {
    const authError = mount(<AuthenticationError />);
    expect(authError.contains(Alert));
   })

   /*
   it("<AuthenticationScreen /> ", () => {
    const authError = mount(<AuthenticationScreen />);
    expect(authError.contains(Redirect));
  })*/


})
