import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import '../../App.css';


const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderMune extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
            <Icon type="customer-service" theme="outlined" />
              <span>音乐</span>
            </Menu.Item>
            <Menu.Item key="2">
            <Icon type="picture" theme="outlined" />
              <span>图片</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>上传文件</span>
            </Menu.Item>
          </Menu>
        </Sider>
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
      </Layout>
    );
  }
}

export default SiderMune;