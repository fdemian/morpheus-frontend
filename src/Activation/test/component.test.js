import React from 'react';
import { render } from '../../utils/testing-utils';
import '@testing-library/jest-dom';
import Activation from '../Activation';
import ActivationSuccess from '../ActivationSuccess';
import ActivationFailure from '../ActivationFailure';

describe('<Activation /> ', () => {

    it('Render sucessfull activation.', () => {
      const { getByTestId } = render(<Activation  />);
      expect(getByTestId('success-container')).toBeTruthy();
    })

    it('Render activation failure', () => {
     const { container } = render(<ActivationFailure  />);

     // TODO: does not render anything useful.
     expect(container).toBeTruthy();
    })

  })
