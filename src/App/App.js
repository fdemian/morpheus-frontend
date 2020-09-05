import React, { Fragment } from 'react';
import LayoutDesktop from './LayoutDesktop';
import LayoutMobile from './LayoutMobile';
import MediaQuery from 'react-responsive';
import { Helmet } from "react-helmet";

const App = (props) => {

  return (
  <Fragment>

     <Helmet>
       <meta name="Description" content={props.description} />
       <meta charSet="utf-8" />
       <meta name="og:title" content={props.blogName} />
       <title>{props.blogName}</title>
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
