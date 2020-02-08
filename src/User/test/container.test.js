import React from 'react';
import configureMockStore from 'redux-mock-store';
import Enzyme, { mount }  from 'enzyme';
//import thunk from 'redux-thunk';
import Container, { mapStateToProps } from '../Container';
import { Provider } from 'react-redux';

//const middlewares = [thunk];
const mockStore = configureMockStore();

const initialState ={
  stories: [],
  isFetching: true,
  error: false,
  user: null
}

const ComponentWithStore = ({component, store}) => {
  return mount(
  <Provider store={store}>
    {component}
  </Provider>
  )
};

describe('<User /> container', () => {

  it('Render container with initial state.', () => {
    const store = mockStore(initialState);
    const component = <ComponentWithStore component={Container} store={store} />;
    expect(component).toBeTruthy();
  })

  it('mapStateToProps', () => {

    const state = {
      user: {
        stories: [],
        isFetching: false,
        error: false,
        user: {

        }
      }
    };

    const expectedMapped = {
      stories: [],
      isFetching: false,
      error: false,
      user: {}
    };

    const mappedState = mapStateToProps(state);
    expect(mappedState).toStrictEqual(expectedMapped);
  })

})
