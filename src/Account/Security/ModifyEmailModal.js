import React, { useState } from 'react';
import {Input, Button, Alert, Spin } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Security.css';

const ErrorLayer = ({error}) => {

  if(!error)
    return null;

  return(
  <div className="security-view password-success-layer">
    <FontAwesomeIcon
       icon={faTimes}
       size="2x"
       color="red"
       className="alert-circle"
    />
    <p>There was a problem updating your email.</p>
  </div>
  )

}

const ModifyEmailModal = (props) => {
  const {
    user,
    isFetching,
    error,
    updateEmail
  } = props;
  const { email } = user;
  const [userEmail, setUserEmail] = useState(email);

  const text = `By changing your email you will no longer recieve notifications
  to your older email. Please make sure you will not use this email anymore.`;


  if(isFetching)
   return <Spin size="large" className="modal-spin" />;

  /*
  if(validated)
   return(
   <div className="security-view password-success-layer">
     <FontAwesomeIcon
        icon={faCheck}
        size="2x"
        color="green"
        className="alert-circle"
     />
     <p className="ValidatedText">Successfully updated email!</p>
    </div>
  );*/

    return(
    <>
      <p>Current email: <span className="email-desc">{user.email}</span></p>
      <Alert
      message="Warning"
      description={text}
      type="warning"
      showIcon
      />
      <div style={{marginTop: '10px'}}>
        <Input
          className="input-field-security"
          placeholder="  Enter new email"
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          prefix={<FontAwesomeIcon icon={faEnvelope} size="lg" color="gainsboro" />}
        />
      </div>
      <div>
        <Button type="button" onClick={() => updateEmail(userEmail)}>
          Change Email
        </Button>
      </div>
      <ErrorLayer error={error} />
    </>
    );
}

export default ModifyEmailModal;
