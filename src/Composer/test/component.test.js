import React from 'react';
import Composer from '../Composer';
import  { render, waitFor } from '../../utils/testing-utils';
import '@testing-library/jest-dom';

const actions = require('../Actions'); // postStory, editStory
const categoryActions = require('../../Categories/Actions');
const loginActions = require('../../Login/Actions');
const loginUtils = require('../../Login/utils');

//jest.spyOn(actions, 'postStory').mockImplementation(() => 1);
//jest.spyOn(actions, 'postStory').mockImplementation(() => 1);

describe("<Composer />", () => {

  it("Loading", () => {

   jest.spyOn(loginUtils, 'getLoginData').mockImplementation(() => 1);

   jest.spyOn(loginActions, 'useUser').mockImplementation((id) => ({
     user: null,
     error: false,
     isLoading: false,
     mutate: jest.fn()
   }));

   jest.spyOn(categoryActions, 'useCategories').mockImplementation(() => ({
     categories: [],
     error: false,
     isLoading: false,
     mutate: jest.fn()
   }));

   const props = { isEditing: false, story: null };
   const { getByText } = render(<Composer {...props} />);

   expect(getByText('Loading...')).toHaveClass('ant-spin-text');

  })

   it("<ComposerComponent />", () => {

    jest.spyOn(loginUtils, 'getLoginData').mockImplementation(() => 1);

    jest.spyOn(loginActions, 'useUser').mockImplementation((id) => ({
      user: {
        id: 1,
        name:"The Admin",
        username:"admin",
        avatar: null
      },
      error: false,
      isLoading: false,
      mutate: jest.fn()
    }));

    jest.spyOn(categoryActions, 'useCategories').mockImplementation(() => ({
      categories: [],
      error: false,
      isLoading: false,
      mutate: jest.fn()
    }));

    const props = { isEditing: false, story: null };
    const { debug } = render(<Composer {...props} />);

    debug();
    
    //expect(component.contains(Composer));
   })

   /*
   it("<Composer />", () => {

    const props = {
      mobile: false,
      postStory: jest.fn(),
      editStory: jest.fn(),
      clearComposer: jest.fn(),
      posting: false,
      posted: false,
      editing: false,
      id: -1,
      title: "",
      categories: [{
        id:1,
        title: "Category X"
      }],
      story: null
    };

    const component = mount(
    <StaticRouter>
      <ComposerComponent {...props} />
    </StaticRouter>
    );

    expect(component.contains(TitleEditor));
    expect(component.contains(CategoriesDropdown));
    expect(component.contains(Editor));
   })

   it("<EditableTagGroup />", () => {

    const props = { initialState: ["art", "literature454456565645645665564684"] };

    const component = mount(<EditableTagGroup {...props} />);
    const tags = component.find(Tag);
    const button = component.find(Button);

    button.simulate('click');

    const input = component.find(Input);

    expect(button.length).toBe(1);
    expect(input.length).toBe(1);
    expect(tags.length).toBe(2);
   })

   it("<TitleEditor />", () => {

    const props = {
      updateTitleFn: jest.fn(),
      initialState: null
    };

    const component = mount(<TitleEditor {...props} />);
    const input = component.find(Input);
    const button = component.find(Button);

    input.simulate('change', { target: { value: 'abcdefg'} });

    expect(input.length).toBe(1);
  })*/

});
