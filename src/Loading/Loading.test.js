import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Loading from './LoadingIndicator';
import { Spin, Alert } from 'antd';

describe("<LoadingIndicator />", () => {

  it("Renders correctly", () => {

   const component = mount(<Loading />);

   expect(component.contains(Spin));
   expect(component.contains(Alert));

  })

});
