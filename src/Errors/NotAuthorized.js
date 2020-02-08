import React from 'react';
import Exception from 'ant-design-pro/lib/Exception';
import { Button } from 'antd';
import './Errors.css';

const actions = (
  <div>
    <Button type="primary">Home</Button>
    <Button>Detail</Button>
  </div>
);

const Description = () => <h2 className="exception-description">You are not authorized to view this page</h2>;

const exception = () => {
  return <Exception type="403" actions={actions} desc={<Description />} />;
}

export default exception;
