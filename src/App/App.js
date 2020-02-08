import React, { Fragment } from 'react';
import LayoutDesktop from './LayoutDesktop';
import LayoutMobile from './LayoutMobile';
import MediaQuery from 'react-responsive';
import { Helmet } from "react-helmet";

const App = (props) => {

  return (
  <Fragment>

     <Helmet>
       <title>{props.blogName}</title>
       <meta charSet="utf-8" />
       <meta name="og:title" content={props.blogName} />
     </Helmet>

     <MediaQuery minDeviceWidth={1246} >
       <LayoutDesktop children={props.children} />
     </MediaQuery>

     <MediaQuery maxDeviceWidth={1246}>
       <LayoutMobile children={props.children} />
     </MediaQuery>

  </Fragment>
  );

}

export default App;
