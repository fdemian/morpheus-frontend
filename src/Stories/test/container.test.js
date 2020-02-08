import React from 'react';
import configureMockStore from 'redux-mock-store';
import Enzyme, { render } from 'enzyme';
import Container, {
  mapStateToProps,
} from '../Container';
import { Provider } from 'react-redux';
import testStories from './data';

const mockStore = configureMockStore();

const initialState = {
  stories: {
    stories: testStories,
    isFetching: false,
    error: false,
  },
  session: {
    loggedIn: false,
    user: {
      role: 'admin'
    }
  }
};

const props = {
  stories: null,
  onLoad: jest.fn(),
  onDelete: jest.fn(),
  onEditClick: jest.fn()
}

const ComponentWithStore = ({Component, store, props}) => {
  return mount(
  <Provider store={store}>
    <Component {...props} />
  </Provider>
  )
};

describe('<Categories /> container', () => {

  it('Render container with initial state.', () => {
    const store = mockStore(initialState);
    const component = <ComponentWithStore
      component={Container}
      store={store}
      props={props}
      />;
    expect(component).toBeTruthy();
  })

  it('mapStateToProps', () => {
    const expectedProps = {
     stories: [{
        id: 33,
        name: 'Topic title here',
        content:'{"blocks": [{"key": "a9dpr", "text": "Brace yourselves", "type": "header-two", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {}}, {"key": "bfvmj", "text": "", "type": "header-two", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {}}, {"key": "f06vm", "text": "Do not go gente, into that good night. Rage, rage agains the dying of the light.", "type": "blockquote", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {}}], "entityMap": {}}',
        tags:  [
         "Interstellar",
         "Quotes",
        ],
        author: {
          avatar: "admin_d947a61b-a4a3-4858-858e-61d6b58dac41..png",
          id: 13,
          name: "admin",
        },
        category: {
          id: 5,
          name: "Category 1",
        },
        comments: 0,
      }],
      isFetching: false,
      error: false,
      loggedIn: false,
      userRole: 'admin'
    };
    const mappedState = mapStateToProps(initialState);
    expect(mappedState).toStrictEqual(expectedProps);
  })

})
