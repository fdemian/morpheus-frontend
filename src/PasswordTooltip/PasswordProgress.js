import React from 'react';
import { Progress } from 'antd';
import {
  passwordStatusMap,
  getPasswordStength,
  passwordProgressMap
} from './passwordUtils';

import './PasswordTooltip.css';

const PasswordProgress = ({password}) => {

  const passwordStatus = getPasswordStength(password);

  return password && password.length ? (
    <div className={`progress-${passwordStatus}`}>
      <Progress
        status={passwordProgressMap[passwordStatus]}
        className='password-progress'
        strokeWidth={6}
        percent={password.length * 10 > 100 ? 100 : password.length * 10}
        showInfo={false}
      />
    </div>
  ) : null;
}

const TooltipModal = ({ password }) => {

  return(
  <div style={{ padding: '4px 0' }}>
    {passwordStatusMap[getPasswordStength(password)]}
    <PasswordProgress password={password} />
    <div style={{ marginTop: 10 }}>
       Please enter at least 6 characters and
       don't use passwords that are easy to guess.
    </div>
  </div>
  );

}

export default TooltipModal;
