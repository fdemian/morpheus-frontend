import React from 'react';
import { Button, Input } from 'antd';
import Drafts from '../Drafts';
import { Table } from 'antd';
import DeleteRow from '../DeleteRow';
import { useDrafts } from '../Actions';
import { render, screen } from '../../utils/testing-utils';
import '@testing-library/jest-dom/extend-expect';


describe("<Drafts />", () => {

  /*
  it("Renders correctly.", () => {

    jest.mock('../Actions', () => ({
        useDrafts: () => ({
          drafts: [{
            id: 1,
            name: "Draft 1",
            category: { id: 1, name: "Category 1" }
          }],
          error: false,
          isLoading: false
        })
    }));

    const { getByText } = render(<Drafts />);

    console.log(getByText("Draft 1"));
    //const draftsTable = component.find('.drafts-table')
      //                           .find(Table);

    //expect(draftsTable.length).toBe(1);
    expect(1).toStrictEqual(1);
  });*/

  it("Renders without drafts", () => {

    jest.mock('../Actions', () => ({
        useDrafts: () => ({
          drafts: [],
          error: false,
          isLoading: false
        })
    }));

    const { getByRole } = render(<Drafts />);
    console.log(getByRole("aria-readonly"));
    console.log("::::::");

  })

  /*
  it("<DeleteRow /> not logged in", () => {

    const props = {
      id:1,
      loggedIn: false,
      deleteFn: jest.fn()
    };

    const { getByTestId } = render(<DeleteRow {...props} />);
    console.log(getByTestId('trash-icon'));
    //expect(component.type()).toEqual(null);
  });*/

});
