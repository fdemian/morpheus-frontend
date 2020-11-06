import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestingWrapper from '../../utils/testingUtils';
import Activation from '../Activation';
import ActivationSuccess from '../ActivationSuccess';
import ActivationFailure from '../ActivationFailure';

describe('<Activation /> ', () => {

    it('Render sucessfull activation.', () => {
      const { getByTestId, container } = render(<TestingWrapper Component={Activation} props={{}} />);
      expect(getByTestId('success-container')).toBeTruthy();
    })

    it('Render activation failure', () => {
     const { container } =  render(<TestingWrapper Component={ActivationFailure} props={{}} />);

     // TODO: does not render anything useful.
     expect(container).toBeTruthy();
    })

  })
