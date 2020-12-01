import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialLinks from './SocialLinks';
import LinkIcon from './LinkIcon';
import { render } from '../utils/testing-utils';
import '@testing-library/jest-dom/extend-expect';

const shareLinks = [
  { url:"http://url.com", name: "twitter" },
  { url:"http://url.com", name: "facebook" }
];

describe('<SocialLinks />', () => {

  // Basic rendering test.
  it('Renders correctly.', () => {
   const { getAllByTestId } = render(<SocialLinks links={shareLinks} />);
   expect(getAllByTestId('link-span').length).toBe(2);
  })

});
