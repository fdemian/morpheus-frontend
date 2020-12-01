import React from 'react';
import { Progress } from 'antd';
import PasswordProgress from './PasswordProgress';
import { getPasswordStength } from './passwordUtils';
import { render } from '../utils/testing-utils';
import '@testing-library/jest-dom/extend-expect';

describe('<PasswordProgress />', () => {

  it('Renders correctly', () => {
   const { getByText } = render(<PasswordProgress password="aaa" />);
   expect(getByText('Strength: Weak')).toBeTruthy();
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
