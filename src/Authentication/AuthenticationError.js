import React from 'react';
import { Alert } from 'antd';

const AuthenticationError = ({errorCode, errorMessage}) => {

    return (
    <div>

      <Alert
        message="Error"
        description={errorMessage}
        type="error"
        showIcon
      />

    </div>
    );

}

export default AuthenticationError;
