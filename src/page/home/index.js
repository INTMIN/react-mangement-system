import React, { Component } from 'react';
import { Layout,  Breadcrumb } from 'antd';
import '../../App.css';

const { Content, Footer } = Layout;
class Home extends Component{
    render() {
        return (
        <Layout>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>类别</Breadcrumb.Item>
                <Breadcrumb.Item>图片</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                欢迎min
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              this is min`s network
            </Footer>
          </Layout>
        )
    }
}
export default Home;