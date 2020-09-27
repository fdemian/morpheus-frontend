import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { Redirect } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import TopIcon from './TopIcon';
import Loading from '../Loading/LoadingIndicator';
import './Login.css';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const LoginScreen = (props) => {

  const {
    loggedIn,
    loading,
    authenticate,
    /*oauthServices,
    register,*/
    error
  } = props;

  const initialLoginState = {
    username: null,
    password: null
  };

  //const [type, setType] = useState('login');
  const [login, setLogin] = useState(initialLoginState);

  const onFinish = values => {
    const { username, password } = values;
    authenticate(username, password);
  };

  // TODO: show error message here.
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const usernameChange = (username, register) => {
    setLogin({
      username: username,
      password: login.password
    });
  }

  const passwordChange = (password, register) => {
    setLogin({
      username: login.username,
      password: password
    });
  }

  if(loggedIn)
    return <Redirect to="/"/>;

  if(loading)
    return <Loading />;

  return (
  <div className="login-grid-container">
    <TopIcon />
    <Form
      {...layout}
      name="login-form"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
   >
     <Form.Item
       label=""
       name="username"
       rules={[
         {
           required: true,
           message: 'Please input your username!',
         },
       ]}
     >
       <Input
         className="input-field"
         placeholder=" Enter your username"
         onChange={usernameChange}
         prefix={<FontAwesomeIcon icon={faUser} size="lg" color="gainsboro" />}
       />
     </Form.Item>
     <Form.Item
       label=""
       name="password"
       rules={[
         {
           required: true,
           message: 'Please input your password!',
         },
       ]}
     >
       <Input.Password
         className="input-field"
         placeholder=" Enter password"
         onChange={passwordChange}
         type="password"
         prefix={<FontAwesomeIcon icon={faLock} size="lg" color="gainsboro" />}
       />
     </Form.Item>
     <br />
     <Form.Item>
       <Button type="primary" htmlType="submit" block>
         Log In
       </Button>
     </Form.Item>
   </Form>
   {
     error &&
     <Alert
        style={{ marginTop: 24 }}
        message="User/Password combination is invalid."
        type="error"
        showIcon
        closable
     />
   }
  </div>
  );

}

export default LoginScreen;
