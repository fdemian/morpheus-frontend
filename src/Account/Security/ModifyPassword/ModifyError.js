import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

const ModifyError = ({ error, closeFn }) => {

  if(!error)
    return null;

  return(
  <div className="security-view password-error-layer">
    <div>
      <FontAwesomeIcon icon={faTimes} size="2x" onClick={closeFn} />
    </div>
    <FontAwesomeIcon
       icon={faExclamationCircle}
       size="2x"
       color="red"
       className="alert-circle"
    />
    <p>Something went wrong while updating your password.</p>
    <p>
      Please check that the password you entered as your current password is correct
      and that none of the fields are blank.
    </p>
  </div>
  );

}

export default ModifyError;
