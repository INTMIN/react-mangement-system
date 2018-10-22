import React, {Component} from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class AppIcon extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="app" disabled>
          <Icon type="github" theme="outlined" />MIN
        </Menu.Item>
        <SubMenu  style={{float: 'right'}} title={<span className="submenu-title-wrapper"><Icon type="github" theme="outlined"/>欢迎管理员</span>}>
          <MenuItemGroup>
            <Menu.Item key="setting:1">设置</Menu.Item>
            <Menu.Item key="setting:2">退出</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

export default AppIcon;