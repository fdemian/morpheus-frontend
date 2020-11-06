import React from 'react';
import { SWRConfig } from 'swr';
import { BrowserRouter as Router } from 'react-router-dom';

const swrOptions = {
  suspense: false,
  dedupingInterval: 0
};

const TestingWrapper = ({props, Component}) => (
<SWRConfig {...swrOptions}>
  <Router>
   <Component {...props} />
  </Router>
</SWRConfig>
);

export default TestingWrapper;
