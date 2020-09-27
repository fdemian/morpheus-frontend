import React from 'react';
import Enzyme, { mount, render } from 'enzyme';
import { StaticRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Alert , Input, Tag, Button} from 'antd';
import { Editor } from 'elementary-editor';

//
import Composer from '../Composer';
import ComposerComponent from '../ComposerComponent';
import CategoriesDropdown from '../CategoriesDropdown';
import EditableTagGroup from '../EditableTagGroup';
import TitleEditor from '../TitleEditor';

describe("<Composer />", () => {

   it("<ComposerWrapper />", () => {

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

    const component = mount(
    <StaticRouter>
      <Composer {...props} />
    </StaticRouter>
    );

    expect(component.contains(Composer));
   })

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
   })

});
