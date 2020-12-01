import React, { Suspense, lazy } from 'react';
import { Button } from 'antd';
import './Errors.css';

const Exception = lazy(() => import('ant-design-pro/lib/Exception'));

const actions = (
  <div>
    <Button type="primary">Home</Button>
  </div>
);

const Description = () => <h2 className="exception-description">You are not authorized to view this page</h2>;

const exception = () => {
  return (
  <Suspense fallback={<p>Error!</p>}>
    <Exception
      type="403"
      actions={actions}
      desc={<Description />}
    />
  </Suspense>
  );
}

export default exception;
