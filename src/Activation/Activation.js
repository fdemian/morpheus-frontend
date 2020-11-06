import React from 'react';
//import ActivationFailure from './ActivationFailure';
import ActivationSuccess from './ActivationSuccess';
import './Activation.css';

const Activation = () => (
  <div className="ActivationContainer" data-testid="success-container">
	   <ActivationSuccess data-testid="success-screen" />
  </div>
);

export default Activation;
