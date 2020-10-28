import React, { lazy } from 'react';
import { Button } from 'antd';
import './Errors.css';

const Exception = lazy(() => import('ant-design-pro/lib/Exception'));

const actions = (
  <div>
    <Button type="primary">Home</Button>
    <Button>Detail</Button>
  </div>
);

const Description = () => <h2 className="exception-description">You are not authorized to view this page</h2>;

const exception = () => {
  return (
  <Exception
    type="403"
    actions={actions}
    desc={<Description />}
  />
  );
}

export default exception;
