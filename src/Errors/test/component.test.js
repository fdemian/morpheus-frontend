import React from 'react';
import Exception from 'ant-design-pro/lib/Exception';
import NotAuthorized from '../NotAuthorized';
import NotFound from '../NotFound';
import { render, waitFor } from '../../utils/testing-utils';
import '@testing-library/jest-dom/extend-expect';

describe('Error components ', () => {

  it('403 - Not authorized', async () => {
   const { getByText } = render(<NotAuthorized />);
   await waitFor(() => expect(getByText('Home')).toBeTruthy());
  })

  it('404 - Not found', async () => {
    const { getByText } = render(<NotFound />);
    await waitFor(() => expect(getByText('Home')).toBeTruthy());
  })

})
