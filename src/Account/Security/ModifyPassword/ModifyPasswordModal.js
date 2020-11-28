import React, { useState } from 'react';
import {Input, Form, Button, Popover } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import ModifyError from './ModifyError';
import ErrorLayout from './ErrorLayout';
import TooltipModal from '../../../PasswordTooltip/PasswordProgress';
import { getPasswordErrors } from './utils';
import '../Security.css';

const ModifyPasswordModal = (props) => {

  const [currentPass,setCurrentPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [newPassRepeat, setNewPassRepeat] = useState('');
  const [error, setError] = useState(false);
  const [ message, setMessage] = useState('');
  const [ passwordStatusVisible] = useState(false);

  const { modifyPassword } = props;
  const errorClass = error ? " input-error" : "";

  function clearError(){
    setError(false);
    setMessage('');
  }

  function onSubmit(){
    const passErrors = getPasswordErrors(newPass, newPassRepeat);

    if(passErrors.error) {
      setError(true);
      setMessage(passErrors.message);
      return false;
    }

    if(!passErrors.error) {
      modifyPassword(currentPass, newPass); // No error. Submit.
      clearError(); // Clear errors from state.
      return true;
    }
  }

  return(
  <Form
     id="modify-password-form"
     name="modify-password-form"
     role="form"
     onSubmit={null}
     className="modify-password-form"
  >

    <Form.Item
      name="password-current"
      rules={[]}
    >
      <Input
        id="modify-password-form_password-current"
        role="password"
        name="password-current"
        className="input-field-security "
        placeholder=" Enter current password"
        onChange={(e) => setCurrentPass(e.target.value)}
        type="password"
        value={currentPass}
        prefix={
          <FontAwesomeIcon
            icon={faLock}
            size="lg"
            color="gainsboro"
          />
        }
      />
    </Form.Item>
    <Form.Item
      name="password-new"
      rules={[]}
    >
      <Popover
         getPopupContainer={node => node.parentNode}
         content={<TooltipModal password={newPass} />}
         overlayStyle={{ width: 240 }}
         placement="right"
         visible={passwordStatusVisible}
      >
        <Input
          role="password"
          name="password-new"
          id="modify-password-form_password-new"
          className={"input-field-security " + errorClass}
          placeholder=" Enter new password"
          onChange={(e) => setNewPass(e.target.value)}
          type="password"
          value={newPass}
          prefix={
            <FontAwesomeIcon
              icon={faLock}
              size="lg"
              color="gainsboro"
            />
          }
        />
      </Popover>
    </Form.Item>
    <Form.Item
      label=""
      name="password-repeat"
      rules={[]}
    >
      <Input
        id="modify-password-form_password-repeat"
        className={"input-field-security " + errorClass}
        role="password"
        name="password-repeat"
        placeholder=" Confirm new password"
        onChange={(e) => setNewPassRepeat(e.target.value)}
        type="password"
        value={newPassRepeat}
        prefix={
          <FontAwesomeIcon
            icon={faLock}
            size="lg"
            color="gainsboro" />
        }
      />
     </Form.Item>
      <div>
       <Button
          type="button"
          onClick={onSubmit}
        >
         Change Password
       </Button>
      </div>

      <div style={{marginTop: '10px'}}>
       <ErrorLayout
         isError={error}
         message={message}
         onClose={clearError}
       />
       <ModifyError
         error={error}
         closeFn={clearError}
       />
      </div>

  </Form>
  )

}

export default ModifyPasswordModal;
