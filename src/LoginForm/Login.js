import React, { useState } from 'react';
import Login from 'ant-design-pro/lib/Login';
import { Form, Alert } from 'antd';
import { Redirect } from 'react-router';
import GridContent from '../PageHeaderWrapper/GridContent';
import TopIcon from './TopIcon';
import Loading from '../Loading/LoadingIndicator';
import LoginTab from './Login/LoginTab';
import RegisterTab from './Register/RegisterTab';
import { getMethodFromProps } from './utils';
import './Login.css';

const { Tab } = Login;

const LoginScreen = (props) => {

  const method = getMethodFromProps(props);

  const {
    loggedIn,
    oauthServices,
    loading,
    authenticate,
    register
  } = props;

  const _login = {
    username: null,
    password: null
  };
  const _registration = {
    username: null,
    email: null,
    password: null,
    passwordRepeat: null,
  }

  const [notice, setNotice] = useState('');
  const [type, setType] = useState(method);
  const [login, setLogin] = useState(_login);
  const [registration, setRegistration] = useState(_registration);

  const onSubmit = (e) => {
    e.preventDefault();

    const message = 'The combination of username and password is incorrect!';

    if(!e)
     setNotice(message);

    if(type === 'login'){
      const { username, password } = login;
      authenticate(username, password);
    }

    if(type === 'register'){
      register("database", null, registration, "/");
    }
  }

  const usernameChange = (username, register) => {
    if(!register){
      setLogin({
        username: username,
        password: login.password
      });
    }
    else {
      setRegistration({
        username: username,
        email: registration.email,
        password: registration.password,
        passwordRepeat: registration.passwordRepeat
      });
    }
  }

  const passwordChange = (password, register) => {
    if(!register) {
      setLogin({
        username: login.username,
        password: password
      });
    }
    else {
      setRegistration({
        username: registration.username,
        password: password,
        email: registration.email,
        passwordRepeat: registration.passwordRepeat
      });
    }
  }

  const emailChange = (email) => {
    setRegistration({
      username: registration.username,
      email: email,
      password: registration.password,
      passwordRepeat: registration.passwordRepeat
    });
  }

  const passwordRepeatChange = (password) => {
     setRegistration({
       username: registration.username,
       password: registration.password,
       email: registration.email,
       passwordRepeat: password
     });
  }

  if(loggedIn)
     return <Redirect to="/"/>;

  if(loading)
    return <Loading />;

  return (
  <div className="login-grid-container">
    <GridContent>
        <TopIcon />
        <Form name="login-register-form" onFinish={onSubmit}>
          <Login
             defaultActiveKey={method}
             onTabChange={setType}
             className="login-container"
          >
            <Tab key="login" tab="Login"  className="login">
              {
                notice &&
                <Alert
                  style={{ marginBottom: 24 }}
                  message={notice}
                  type="error"
                  showIcon
                  closable
                />
              }
              <LoginTab
                usernameChange={(e) => usernameChange(e.target.value, false)}
                passwordChange={(e) => passwordChange(e.target.value, false)}
                onRegisterClick={() => setType("register")}
                oauthServices={oauthServices}
              />
            </Tab>
            <Tab key="register" tab="Register" className="register">
              <RegisterTab
                oauthServices={oauthServices}
                emailChange={(e) => emailChange(e.target.value)}
                usernameChange={(e) => usernameChange(e.target.value, true)}
                passwordChange={(e) => passwordChange(e.target.value, true)}
                passwordRepeatChange={(e) => passwordRepeatChange(e.target.value)}
                data={registration}
                onLoginClick={() => setType("login")}
              />
            </Tab>
          </Login>
        </Form>
    </GridContent>
  </div>
  );

}

export default LoginScreen;
