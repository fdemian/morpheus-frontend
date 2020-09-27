import React, { Suspense, Fragment } from 'react';
import Navbar from '../Navbar/Container';
import { useMediaQuery } from 'react-responsive';
import { Helmet } from "react-helmet";
import { Layout, Affix, Spin } from 'antd';
import './App.css';

const {Content, Header } = Layout;

const App = (props) => {

  const isMobile = useMediaQuery({query: '(max-device-width: 1224px)'});
  const { children } = props;

  return (
  <Fragment>

     <Helmet>
       <meta charset="utf-8" />
       <meta name="description" content={props.description} />
       <title>{props.blogName}</title>
     </Helmet>

     <Suspense fallback={<Spin />}>
       <Layout>

        <Header className="page-header-container">
           <Affix>
           <Navbar mobile={isMobile} />
           </Affix>
        </Header>

        <Content className={"content-container" + isMobile ? "mobile": ""}>
          {children}
        </Content>
       </Layout>

      </Suspense>

  </Fragment>
  );

}

export default App;
