import React, { Suspense } from 'react';
import { Spin } from 'antd';

const RouteWrapper = ({ Component }) => {

  return(
  <div>
    <Suspense fallback={<Spin />}>
      <Component />
    </Suspense>
  </div>
  );
}

export default RouteWrapper;
