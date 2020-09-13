import React, { Suspense } from 'react';
import { Spin } from 'antd';

const RouteWrapper = ({ Component }) => {

  return(
  <Suspense fallback={<Spin />}>
    <Component />
  </Suspense>
  );
}

export default RouteWrapper;
