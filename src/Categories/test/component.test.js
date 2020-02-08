import React from 'react';
import { Button, Input } from 'antd';
import Enzyme, { mount, shallow} from 'enzyme';
import Categories from '../Categories';
import { StaticRouter } from 'react-router';
import { Table } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewCategoryForm from '../NewCategoryForm';
import DeleteRow from '../DeleteRow';
import Form from '../Form';

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

    const component = mount(
    <StaticRouter>
      <Categories {...props} />
    </StaticRouter>
    );
    const categoryForm = component.find(NewCategoryForm);
    const categoriesTable = component.find(Table);

    expect(categoryForm.length).toBe(1);
    expect(categoriesTable.length).toBe(1);
  })

  it("<DeleteRow /> not logged in", () => {

    const props = {
      id:1,
      loggedIn: false,
      deleteFn: jest.fn()
    };

    const component = shallow(<DeleteRow {...props} />);
    expect(component.type()).toEqual(null);
  })

  it("<Form />", () => {

    const props = {
      updateName: jest.fn(),
      updateDescription: jest.fn(),
      createFn: jest.fn(),
      cancelFn: jest.fn(),
      visible: true
    };

    const component = mount(<Form {...props} />);
    const button = component.find(Button);
    const input = component.find(Input)

    expect(button.length).toEqual(2);
    expect(input.length).toEqual(2);
  })


});
