import React from 'react';
import Navbar from '../Navbar/Container';
import { Layout, Affix } from 'antd';
import './App.css';

const {Content, Header } = Layout;

const LayoutMobile = ({children}) => {

  return(
  <Layout>

    <Header className="page-header-container">
      <Affix>
        <Navbar mobile={true} />
      </Affix>
    </Header>

    <Content className="content-container mobile">
      {children}
    </Content>

 </Layout>
 );

}


export default LayoutMobile;
