import React from 'react';
import configureMockStore from 'redux-mock-store';
import Enzyme, { mount } from 'enzyme';
import Container from '../Container';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();

const initialState =  {
  loggedIn: true,
  drafts: [],
  error: false
};

const ComponentWithStore = ({component, store}) => {
  return mount(
  <Provider store={store}>
    {component}
  </Provider>
  )
};

describe('<Categories /> container', () => {

  it('Render container with initial state.', () => {
    const store = mockStore(initialState);
    const component = <ComponentWithStore component={Container} store={store} />;
    expect(component).toBeTruthy();
  })

})
