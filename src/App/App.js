import React, { Suspense } from 'react';
import Navbar from '../Navbar/Container';
import { useMediaQuery } from 'react-responsive';
import { Helmet } from "react-helmet";
import { Layout, Affix, Spin } from 'antd';
import initialData from './initialData';
import useSWR from 'swr';
import './App.css';

const { Content, Header } = Layout;

const App = (props) => {

  const { data, error } = useSWR('/api/config', { initialData: initialData});
  const { children } = props;
  const { description, blogName } = data;
  const isMobile = useMediaQuery({query: '(max-device-width: 1224px)'});

  if(error)
    return null;

  return (
  <>

     <Helmet>
       <meta charset="utf-8" />
       <meta name="description" content={description} />
       <title>{blogName}</title>
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

  </>
  );

}

export default App;
