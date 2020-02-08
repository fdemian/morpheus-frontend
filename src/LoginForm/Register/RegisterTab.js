import React, { Fragment } from 'react';
import { Input, Popover } from 'antd';
import Login from 'ant-design-pro/lib/Login';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faLock,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import OAuthButtons from '../../OAuthButtons/OAuthButtons';
import TooltipModal from '../../PasswordTooltip/PasswordProgress';
//import { commonPassList } from '../../PasswordTooltip/passwordUtils';

const { Submit } = Login;

const RegisterTab = (props) => {

  const {
    oauthServices,
    emailChange,
    usernameChange,
    passwordChange,
    passwordRepeatChange,
    registered,
    data
  } = props;

  console.log(oauthServices);
  console.log("............");

  const {
    /*username,
    email,
    passwordRepeat,*/
    password
  }= data;

  if(registered)
    return(
    <div className="RegisterTitleInfo">
       <h2>
       Congratulations, you have been sucessfully registered
       </h2>
       <Link to="/login/login">
        <p>Log in to Morpheus</p>
       </Link>
    </div>
    )

  return(
  <Fragment>
    <Input
      className="input-field"
      placeholder=" Enter email address"
      prefix={
      <FontAwesomeIcon
        icon={faEnvelope}
        size="lg"
        color="gainsboro"
      />
      }
      onChange={emailChange}
    />
    <Input
      className="input-field"
      placeholder=" Enter your username"
      prefix={<FontAwesomeIcon icon={faUser} size="lg" color="gainsboro" />}
      onChange={usernameChange}
    />
    <Popover
       getPopupContainer={node => node.parentNode}
       content={<TooltipModal password={password} />}
       overlayStyle={{ width: '250px'}}
       placement="right"
       className="PopoverPassword"
       visible={password && password.length > 0}
    >
        <Input
          className="input-field"
          placeholder=" Choose a password"
          type="password"
          prefix={<FontAwesomeIcon icon={faLock} size="lg" color="gainsboro" />}
          onChange={passwordChange}
        />
    </Popover>
    <Input
      className="input-field"
      placeholder=" Repeat password"
      type="password"
      prefix={<FontAwesomeIcon icon={faLock} size="lg" color="gainsboro" />}
      onChange={passwordRepeatChange}
    />
    <Submit>Register</Submit>
    { /*
    <div className="alt-login-container">
      <h1 className="alt-login-title">Oauth registration</h1>
      <OAuthButtons services={oauthServices} method="register" />
    </div>
    */}
  </Fragment>
  );
}

export default RegisterTab;
