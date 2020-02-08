import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Category from '../Category';
import Stories from '../../Stories/Stories';
import Loading from '../../Loading/LoadingIndicator';

describe('<Category />', () => {

  // Basic rendering test.
  it('Renders correctly.', () => {

    const props = {
      category: {
        id: 1,
        name: 'test',
        description: 'a test category'
      },
      isFetching: false,
      error: false,
      loggedIn: false,
      stories: []
    };

   const component = mount(<Category {...props} />);
   const storiesComponent = component.find(Stories);
   const nameContainer = component.find('.CategoryNameContainer');
   const categoryName = nameContainer.find('.CategoryName');
   const categoryDescription = nameContainer.find('.CategoryDescription');

   expect(nameContainer.length).toBe(1);
   expect(storiesComponent.length).toBe(1);
   expect(categoryName.length).toBe(1);
   expect(categoryDescription.length).toBe(1);

   expect(categoryName.text()).toBe(props.category.name);
   expect(categoryDescription.text()).toBe(props.category.description);

  })

  it('Renders <Loading /> component.', () => {
    const props = {
      category: {
        id: 1,
        name: 'test',
        description: 'a test category'
      },
      isFetching: true,
      error: false,
      loggedIn: false,
      stories: []
    };

   const component = mount(<Category {...props} />);
   const loadingComponent = component.find(Loading);
   expect(loadingComponent.length).toBe(1);
  });
  
});
