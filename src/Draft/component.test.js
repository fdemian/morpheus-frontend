import React from 'react';
import Draft from './Draft';
import { render, waitFor } from '../utils/testing-utils';
import '@testing-library/jest-dom/extend-expect';
import { useDraft } from './Actions';
import data from './data';

const utils = require('../Login/utils');
const actions = require('./Actions');

describe("<Draft />", () => {

    it("Renders without error.", async () => {

     jest.spyOn(utils, 'isLoggedIn').mockImplementation(() => (true));

     jest.spyOn(actions, 'useDraft').mockImplementation(() => ({
        draft: data,
        error: false,
        isLoading: false,
        mutate: jest.fn()
     }));

     const props = { match: { params: { id: 1 }}};
     const { debug } = render(<Draft {...props} />);

     //await waitFor(() => expect(getByText(errorText)).toBeTruthy());
     debug();

    })

})
