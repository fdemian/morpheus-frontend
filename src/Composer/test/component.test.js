import React from 'react';
import Composer from '../Composer';
import  { render, waitFor } from '../../utils/testing-utils';
import '@testing-library/jest-dom';

describe("<Composer />", () => {

   it("<ComposerComponent />", () => {

    const props = {
      postStory: jest.fn(),
      editStory: jest.fn(),
      clearComposer: jest.fn(),
      posting: false,
      posted: false,
      id: -1,
      title: "",
      categories: [],
      story: undefined
    };

    const { debug } = render(<Composer {...props} />);

    debug()
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
