import React from 'react';
import configureMockStore from 'redux-mock-store';
import Enzyme,  { mount }  from 'enzyme';
import Container from '../Container';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();

const initialState = {
  id : 0,
  category: null,
  isFetching: true,
  error: false,
  stories: []
}

const ComponentWithStore = ({component, store}) => {
  return mount(
  <Provider store={store}>
    {component}
  </Provider>
  )
};

describe('<Category /> container', () => {

  it('Render container with initial state.', () => {
    const store = mockStore(initialState);
    const component = <ComponentWithStore component={Container} store={store} />;
    expect(component).toBeTruthy();
  })

})
