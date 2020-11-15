import React from 'react';
import  { render, waitFor } from '../../utils/testing-utils';
import Category from '../Category';
import Stories from '../../Stories/Stories';
import Loading from '../../Loading/LoadingIndicator';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../Actions');

const actions = require('../Actions');

describe('<Category />', () => {

  beforeEach(() => {
    jest.restoreAllMocks()
  })

  // Basic rendering test.
  it('Renders correctly.', () => {

    jest.spyOn(actions, 'useCategory').mockImplementation((id) => ({
      category: {
        id: 1,
        name: "A category",
        description: 'a test category'
      },
      mutate: null,
      isLoading: false,
      error: false
    }));

    jest.spyOn(actions, 'useCategoryStories').mockImplementation((id) => ({
      stories: {
         items: [
          {
             id: 35,
             date: "2019-07-21 20:57:24.238995",
             name: 'fasddfsadsfa',
             title: "..s.s.f.sad",
             category: {
                id: 8,
                name: 'Category X'
              },
              content: '{"blocks": [{"key": "bhpma", "text": "Category X", "type": "unstyled", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {}}], "entityMap": {}}',
              comments: 2,
              tags: ['Ars'],
              isFetching: false,
              error: false,
              author: {
                id: 13,
                name: '',
                avatar: 'admin_d947a61b-a4a3-4858-858e-61d6b58dac41..png',
                username: 'admin',
                signature: 'Base signature.'
              }
          }
        ]
      },
      mutate: null,
      isLoading: false,
      error: false
    }));

   const props = { match: { params: { id: 1 } } };
   const { getByText } = render(<Category {...props} />);

   expect(getByText("A category")).toHaveClass("CategoryName");
   expect(getByText("a test category")).toHaveClass("CategoryDescription");

   /*
   const storiesComponent = component.find(Stories);
   expect(nameContainer.length).toBe(1);
   expect(storiesComponent.length).toBe(1);
   */
  })

  it('Renders <Loading /> component.', () => {

    jest.spyOn(actions, 'useCategory').mockImplementation((id) => ({
      category: null,
      mutate: null,
      isLoading: true,
      error: false
    }));

    jest.spyOn(actions, 'useCategoryStories').mockImplementation((id) => ({
      stories: null,
      mutate: null,
      isLoading: true,
      error: false
    }));

   const props = { match: { params: { id: 1 } } };
   const {getByText} = render(<Category {...props} />);
   expect(getByText('Loading...')).toHaveClass('ant-spin-text');
  })

});
