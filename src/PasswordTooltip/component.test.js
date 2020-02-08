import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { Progress } from 'antd';
import PasswordProgress from './PasswordProgress';
import { getPasswordStength } from './passwordUtils';

describe('<PasswordProgress />', () => {

  it('Renders correctly', () => {
   const pwTooltip = mount(<PasswordProgress password="aaa" />);
   const progressBar = pwTooltip.find(Progress);
   expect(progressBar.length).toBe(1);
  })

  it('Password checking funtions', () => {

   const shortPassStrength = getPasswordStength('a');
   const mediumPassStrength = getPasswordStength('super1');
   const longPassStrength = getPasswordStength('megapassword1232456');

   expect(shortPassStrength).toStrictEqual('poor');
   expect(mediumPassStrength).toStrictEqual('pass');
   expect(longPassStrength).toStrictEqual('ok');
  })

})
