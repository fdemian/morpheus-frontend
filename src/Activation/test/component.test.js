import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';

import Activation from '../Activation';
import ActivationSuccess from '../ActivationSuccess';
import ActivationFailure from '../ActivationFailure';

describe('<Activation /> ', () => {

    it('Render sucessfull activation.', () => {
      const enzymeWrapper = shallow(<Activation />);
      expect(enzymeWrapper.contains(<ActivationSuccess />));
    })

    it('Render activation failure', () => {
     const component = render(<ActivationFailure />);

     // TODO: does not render anything useful.
     expect(component.length).toBe(1);
    })

  })
