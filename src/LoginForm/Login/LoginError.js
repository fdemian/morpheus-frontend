import React from 'react';
import { Alert, notification } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const loginErrorNotification = () => {
  notification.open({
    message: 'Error',
    description: 'We could not log you in, please check your user/password combination.',
    icon: <FontAwesomeIcon icon={faTimesCircle} color="red" />,
    placement: "bottomRight"
  });
};

const LoginError = ({error}) => {

  if(error){

    loginErrorNotification();

    return(
    <div>
      <Alert
        message="Error"
        description="The user/password combination was invalid."
        type="error"
        closable={true}
        showIcon
      />
    </div>
    );

  }

  return null;

}

export default LoginError;
