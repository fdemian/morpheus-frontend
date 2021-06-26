import React from 'react';
import Stories from '../Stories';
import testStories from './data';
import { render, waitFor } from '../../utils/testing-utils';
import '@testing-library/jest-dom/extend-expect';

const utils = require('../../Login/utils');
const actions = require('../Actions');

const errorText = "There was an error retrieving the stories on this blog. Please try again later.";
const noStoriesText = "There are currently no stories on this blog.";

describe("<Stories />", () => {


   it("Renders with error.", async () => {

     jest.spyOn(utils, 'isLoggedIn').mockImplementation(() => (true));
     jest.spyOn(actions, 'useStories').mockImplementation(() => ({
        data: null,
        error: true,
        isLoading: false,
        mutate: jest.fn()
     }));

     const { getByText } = render(<Stories />);
     await waitFor(() => expect(getByText(errorText)).toBeTruthy());
   })

   it("Renders with stories.", async () => {

      jest.spyOn(utils, 'isLoggedIn').mockImplementation(() => (true));
      jest.spyOn(actions, 'useStories').mockImplementation(() => ({
         data: { items: testStories },
         error: false,
         isLoading: false,
         mutate: jest.fn()
      }));

      const { getByText } = render(<Stories />);

      await waitFor(() => {
        expect(getByText(testStories[0].name)).toBeInTheDocument();
        expect(getByText(testStories[1].name)).toBeInTheDocument();
      });
    })

});
