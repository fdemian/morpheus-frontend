import React from 'react';
import Enzyme, { mount, render } from 'enzyme';
import { StaticRouter } from 'react-router';
import { List, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ActionButton from '../ActionButton';
import GridContent from '../../PageHeaderWrapper/GridContent';
import Stories from '../Stories';
import testStories from './data';

describe("<Stories />", () => {

    it("Renders with error.", () => {

     const props = {
       stories: null,
       onDelete: jest.fn(),
       onEditClick: jest.fn(),
       isFetching: false,
       error: true,
       loggedIn: false
     };

     const component = render(
      <StaticRouter>
       <Stories {...props} />
     </StaticRouter>
     );
     const errorText = component.find('h1');
     expect(errorText.length).toBe(1);
     expect(errorText[0].attribs['class']).toEqual("NoStories ErrorText");
    })

    it("Renders without stories.", () => {

     const props = {
       stories: [],
       onDelete: jest.fn(),
       onEditClick: jest.fn(),
       isFetching: false,
       error: false,
       loggedIn: false
     };

     const component = render(
      <StaticRouter>
       <Stories {...props} />
      </StaticRouter>
     );
     const noStoriesText = component.find('h1');
     expect(noStoriesText.length).toBe(1);
     expect(noStoriesText[0].attribs['class']).toEqual("NoStories");
   })

   it("Renders with stories.", () => {

    const props = {
      stories: testStories,
      onDelete: jest.fn(),
      onEditClick: jest.fn(),
      isFetching: false,
      error: false,
      loggedIn: false
    };

    const component = mount(
     <StaticRouter>
      <Stories {...props} />
    </StaticRouter>
    );
    const storyContainer = component.find('.stories-container');
    const gridContainer = storyContainer.find(GridContent);
    const storyList = component.find('.StoryListContainer');

    expect(storyList.length).toBe(1);
  })

  it("Renders the ActionButton.", () => {

   const props = {
     title: 'Action Button',
     linkURL: '/link-to-url',
     icon: null,
     clickFn: jest.fn(),
     id:1,
     cssClass: 'TestButton'
   };

   const component = mount(
    <StaticRouter>
     <ActionButton {...props} />
   </StaticRouter>
   );

   const tooltip = component.find(Tooltip);
   const link = component.find(Link);

   expect(link.length).toBe(1);
   expect(tooltip.length).toBe(1);
  })

});
