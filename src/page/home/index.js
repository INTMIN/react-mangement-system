import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import SiderMune from '../menu';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: 'true',
    }
  
  }
  

  render() {
      return (
        <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
        
            <Menu.Item key="app">
            <Link to='/login'><Icon type="github" theme="outlined" />MIN</Link>
          </Menu.Item>
        
          
          <SubMenu  style={{float: 'right'}} title={<span className="submenu-title-wrapper"><Icon type="github" theme="outlined"/>欢迎管理员</span>}>
            <MenuItemGroup>
              <Menu.Item key="setting:1">设置</Menu.Item>
              <Menu.Item key="setting:2">退出</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
        </Menu>
        <SiderMune />
        </div>
      );
    }
    
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      login: e.key
    });
  }
  }

export default Home;