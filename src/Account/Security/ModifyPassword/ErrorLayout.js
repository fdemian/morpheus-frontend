import React from 'react';
import { Alert } from 'antd';

const ErrorLayout = ({isError, message, onClose}) => {

  if(!isError)
    return null;

  return(
  <Alert
    message="Error updating password"
    description={message}
    onClose={onClose}
    type="error"
    closable
  />
  )

}

export default ErrorLayout;
