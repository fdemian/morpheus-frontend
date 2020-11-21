import React from 'react';
import antd from 'antd';
import { Button, Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeleteRow from '../DeleteRow';
import Form from '../Form';
import Categories from '../SWRComponent';
import  { render, waitFor, fireEvent } from '../../utils/testing-utils';
import '@testing-library/jest-dom';

const utils = require('../../Login/utils');
const actions = require('../Actions');

describe("<Categories />", () => {

  it("Renders correctly.", () => {

    jest.spyOn(utils, 'isLoggedIn').mockImplementation(() => (true));
    jest.spyOn(actions, 'useCategories').mockImplementation(() => ({
      categories: [{
        id: 1,
        name: 'Category 1',
        description: "A category 1"
      }],
      isLoading:false,
      isError: false,
      mutate: jest.fn()
    }));
    jest.spyOn(actions, 'deleteCategory').mockImplementation(() => ({}));
    jest.spyOn(actions, 'createCategory').mockImplementation(() => ({}));

    const { getByText, getAllByRole } = render(<Categories />);

    expect(getByText('Category 1')).toBeInTheDocument();
    expect(getByText('A category 1')).toBeInTheDocument();
    expect(getAllByRole('button')[0]).toBeInTheDocument();
  })

  it("Change name and description values .", () => {

    jest.spyOn(utils, 'isLoggedIn').mockImplementation(() => (true));
    jest.spyOn(actions, 'useCategories').mockImplementation(() => ({
      categories: [{
        id: 1,
        name: 'Category 1',
        description: "A category 1"
      }],
      isLoading:false,
      isError: false,
      mutate: jest.fn()
    }));
    jest.spyOn(actions, 'deleteCategory').mockImplementation(() => ({}));
    jest.spyOn(actions, 'createCategory').mockImplementation(() => ({}));

    const {
        getByText,
        getByRole,
        getAllByRole,
        getByTestId
      } = render(<Categories />);

    expect(getByText('Category 1')).toBeInTheDocument();
    expect(getByText('A category 1')).toBeInTheDocument();

    const button = getAllByRole('button')[0];
    fireEvent.click(button);

    expect(getByText('Cancel')).toBeInTheDocument();
    expect(getByText('Create')).toBeInTheDocument();

    expect(getByRole('form')).toHaveFormValues({
      name: '',
      description: '',
    });

    const nameInput = getByTestId('input-category-name');
    const descInput = getByTestId('input-category-description');

    fireEvent.change(nameInput, { target: { value: 'A name' } })
    fireEvent.change(descInput, { target: { value: 'A description' } })

    expect(getByRole('form')).toHaveFormValues({
      name: 'A name',
      description: 'A description',
    });

  })

  it("Add category .", () => {

    jest.spyOn(utils, 'isLoggedIn').mockImplementation(() => (true));
    jest.spyOn(actions, 'useCategories').mockImplementation(() => ({
      categories: [],
      isLoading:false,
      isError: false,
      mutate: jest.fn()
    }));
    jest.spyOn(actions, 'deleteCategory').mockImplementation(() => ({}));
    jest.spyOn(actions, 'createCategory').mockImplementation(() => ({}));

    const {
        getByText,
        getByRole,
        getAllByRole,
        getByTestId
      } = render(<Categories />);

    // Open the new category form.
    const button = getAllByRole('button')[0];
    fireEvent.click(button);

    // Add a name and description.
    const nameInput = getByTestId('input-category-name');
    const descInput = getByTestId('input-category-description');

    fireEvent.change(nameInput, { target: { value: 'A name' } })
    fireEvent.change(descInput, { target: { value: 'A description' } })

    // Submit form.
    const submitButton = getByText('Create')
    fireEvent.click(submitButton);

    
  })


});
