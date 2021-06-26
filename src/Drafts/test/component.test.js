import React from 'react';
import { Button, Input } from 'antd';
import Drafts from '../Drafts';
import { Table } from 'antd';
import DeleteRow from '../DeleteRow';
import { useDrafts } from '../Actions';
import { render, screen } from '../../utils/testing-utils';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../Actions');

const actions = require('../Actions');

describe("<Drafts />", () => {

  it("Renders with drafts", () => {

    jest.spyOn(actions, 'useDrafts').mockImplementation(() => ({
        drafts: {
          items: [{
            id: 1,
            name: "Draft 1",
            category: { id: 3, name: "User Name" }
          }]
        },
        error: false,
        isLoading: false
    }));

    const { getByText } = render(<Drafts />);

    expect(getByText('Drafts')).toBeInTheDocument();
    expect(getByText('Draft 1')).toHaveAttribute('href', '/draft/1/draft-1');
    expect(getByText('User Name')).toHaveAttribute('href', '/categories/3/user-name');
  })

  /*
  it("Renders without drafts", () => {

    jest.spyOn(actions, 'useDrafts').mockImplementation(() => ({
        drafts: null,
        error: false,
        isLoading: false
    }));

    const container = render(<Drafts />);
    expect(draft).not.toBeInTheDocument();

  })*/

});
