import React from 'react';
import { Button, Input } from 'antd';
import Enzyme, { mount, shallow} from 'enzyme';
import Drafts from '../Drafts';
import { StaticRouter } from 'react-router';
import { Table } from 'antd';
import DeleteRow from '../DeleteRow';

describe("<Drafts />", () => {

  it("Renders correctly.", () => {

    const props = {
      drafts: [{
        id: 1,
        name: "Draft 1",
        category: { id: 1, name: "Category 1" }
      }],
      loggedIn: true,
      deleteFn: jest.fn()
    };

    const component = mount(
    <StaticRouter>
      <Drafts {...props} />
    </StaticRouter>
    );
    const draftsTable = component.find('.drafts-table')
                                 .find(Table);

    expect(draftsTable.length).toBe(1);
  });

  it("<DeleteRow /> not logged in", () => {

    const props = {
      id:1,
      loggedIn: false,
      deleteFn: jest.fn()
    };

    const component = shallow(<DeleteRow {...props} />);
    expect(component.type()).toEqual(null);
  });

});
