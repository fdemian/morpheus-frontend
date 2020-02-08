import React from 'react';

const ActivationFailure = () => {
  return (
  <div>
  	<h1>An error ocurred while activating your account.</h1>
  	<p>
  	  Either no user exists for the activation code specified or the code introduced was invalid.
  	</p>
  	<p>
  	  Please, check your mail's inbox and verify that the link you followed was sent by us.
  	</p>
  </div>
  );
};

export default ActivationFailure;
