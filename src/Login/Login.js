import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { Redirect } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import TopIcon from './TopIcon';
import Loading from '../Loading/LoadingIndicator';
import { newLogin, useUser } from './Actions';
import { isLoggedIn, setLoginData} from './utils';

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
  const [userId, setUserId] = useState(-1);
  const [login, setLogin] = useState(initialLoginState);

  const useForm = async values => {
    const { username, password } = values;
    const data = await newLogin(username, password);
    const { id } = data;

    setUserId(id);
    setLoginData(id);
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

  const { user } = useUser(userId);

  if(user && isLoggedIn())
    return <Redirect to="/"/>;

  if(user && userId>=0)
    return <Loading />;

  return (
  <div className="login-grid-container">
    <TopIcon />
    <Form
      {...layout}
      name="login-form"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={useForm}
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
       <Button
          type="primary"
          htmlType="submit"
          block
          className="login-button"
        >
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
