import React, {
  lazy,
  Suspense,
  Fragment
} from 'react';
import MediaQuery from 'react-responsive';
import { Helmet } from "react-helmet";
import { Spin } from 'antd';

const LayoutDesktop = lazy(() => import('./LayoutDesktop'));
const LayoutMobile = lazy(() => import('./LayoutMobile'));

const App = (props) => {

  return (
  <Fragment>

     <Helmet>
       <meta charset="utf-8" />
       <meta name="description" content={props.description} />
       <title>{props.blogName}</title>
     </Helmet>

     <MediaQuery minDeviceWidth={1246}>
       <Suspense fallback={<Spin />}>
         <LayoutDesktop children={props.children} />
       </Suspense>
     </MediaQuery>

     <MediaQuery maxDeviceWidth={1246}>
       <Suspense fallback={<Spin />}>
         <LayoutMobile children={props.children} />
       </Suspense>
     </MediaQuery>

  </Fragment>
  );

}

export default App;
