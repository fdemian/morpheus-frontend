import React, { Fragment /*, useState*/ } from 'react';
import { /*Checkbox,*/ Input } from 'antd';
import Login from 'ant-design-pro/lib/Login';
//import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import OAuthButtons from '../../OAuthButtons/OAuthButtons';

const { Submit } = Login;

const LoginTab = (props) => {

  const {
    usernameChange,
    passwordChange,
    oauthServices
  } = props;

  //const [keepMeLogged, setKeepMeLogged] = useState(false);

  return (
  <Fragment>
    <Input
      className="input-field"
      placeholder=" Enter your username"
      onChange={usernameChange}
      prefix={<FontAwesomeIcon icon={faUser} size="lg" color="gainsboro" />}
    />
    <Input
      className="input-field"
      placeholder=" Enter password"
      onChange={passwordChange}
      type="password"
      prefix={<FontAwesomeIcon icon={faLock} size="lg" color="gainsboro" />}
    />
    { /*
    <div>
      <Checkbox
          checked={keepMeLogged}
          onChange={() => setKeepMeLogged(!keepMeLogged)}
      >
        Keep me logged in
      </Checkbox>
      <Link to="/forgotpass" style={{marginLeft: '10px'}}>Forgot password?</Link>
    </div>
    */}
    <Submit>Login</Submit>
    { /*
    <div className="alt-login-container">
      <h1 className="alt-login-title">Oauth login</h1>
      <OAuthButtons services={oauthServices} method="login" />
    </div>
    */}
  </Fragment>
  )

}

export default LoginTab;
