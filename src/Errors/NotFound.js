import React, { lazy } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './Errors.css';

const Exception = lazy(() => import('ant-design-pro/lib/Exception'));

const actions = (
<div>
  <Link to="/">
    <Button type="primary">Home</Button>
  </Link>
</div>
);

const Description = () => <h2 className="exception-description">The page you were looking for was not found.</h2>;

const exception = () => {
  return(
  <div className="NotFound">
    <Exception
      type="404"
      actions={actions}
      desc={<Description />}
    />
  </div>
  );
}

export default exception;
