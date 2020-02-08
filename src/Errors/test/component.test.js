import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Exception from 'ant-design-pro/lib/Exception';

import NotAuthorized from '../NotAuthorized';
import NotFound from '../NotFound';

describe('Error components ', () => {

  it('403 - Not authorized', () => {
   const notAuthComponent = mount(
    <MemoryRouter>
      <NotAuthorized />
    </MemoryRouter>
    );
   const exception = notAuthComponent.find(Exception);
   expect(exception.length).toBe(1);
  })

  it('404 - Not found', () => {
    const notFoundComponent = mount(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
    );
    const exception = notFoundComponent.find(Exception);
    expect(exception.length).toBe(1);
  })


})
