import React from 'react';
import antd from 'antd';
import { Button, Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeleteRow from '../DeleteRow';
import Form from '../Form';
import Categories from '../Categories';
import  { render, waitFor } from '../../utils/testing-utils';
import '@testing-library/jest-dom';

/*
jest.mock('antd', () => {
  console.log("....jest");
  const mockAntd = require('antd');

  const Table = ({ children }) => (<table style="width:100%">{children}</table>);

  return {
    ...mockAntd,
    Table
  }
})*/

describe("<Categories />", () => {

  it("Renders correctly.", () => {

    const props = {
      categories: [{
        id: 1,
        name: "Category 1"
      }],
      loggedIn: true,
      deleteFn: jest.fn(),
      createFn: jest.fn()
    };

    const { queryByRole } = render(<Categories {...props} />);
    const button = queryByRole('button');

    expect(1).toStricEqual(1);
    //const categoryForm = component.find(NewCategoryForm);
    //const categoriesTable = component.find(Table);

    //expect(categoryForm.length).toBe(1);
    //expect(categoriesTable.length).toBe(1);
  })

  it("<DeleteRow /> not logged in", () => {

    const props = {
      id:1,
      loggedIn: false,
      deleteFn: jest.fn()
    };

    const { queryByRole } = render(<DeleteRow {...props} />);
    expect(queryByRole('button')).toBeFalsy();
  })

  it("<Form />", () => {

    const props = {
      updateName: jest.fn(),
      updateDescription: jest.fn(),
      createFn: jest.fn(),
      cancelFn: jest.fn(),
      visible: true
    };

    const { getAllByRole, getByTestId } = render(<Form {...props} />);

    const button = getAllByRole('button');
    const inputName = getByTestId('input-category-name');
    const inputDesc = getByTestId('input-category-description');

    expect(button.length).toEqual(2);
    expect(inputName).toBeTruthy();
    expect(inputDesc).toBeTruthy();
  })

});
