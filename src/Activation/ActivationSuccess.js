import React from 'react';
import { Link } from 'react-router-dom';

const ActivationSuccess = () => (
  <div>
    <h1>Account sucessfully activated</h1>
    <p>
      Congratulations! You've sucessfully activated your account.
    </p>
    <p>
      Now you can <Link to="/login">log in</Link> or go the <Link to="/">main site</Link>.
    </p>
  </div>
);

export default ActivationSuccess;
