import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import SiderMune from '../menu';
import { connect } from 'react-redux';
import { actionCreators as loginActionCreators } from '../login/store';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: '',
    }
  }
  render() {
    const { login, logout} = this.props;
    return (
      <div>
      <Menu
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="app">
          <Link to='/'><Icon type="github" theme="outlined" />MIN 管理系统</Link>
        </Menu.Item>
        <SubMenu  style={{float: 'right'}} title={<span className="submenu-title-wrapper"><Icon type="github" theme="outlined"/>欢迎管理员</span>}>
          <MenuItemGroup>
            <Menu.Item key="setting:1">设置</Menu.Item>
            <Menu.Item key="setting:2" onClick={this.props.logout}>退出</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay" style={{float: 'right'}}>
        <Link to='/login'><Icon type="user" theme="outlined" />登录</Link>
      </Menu.Item>
      </Menu>
      <SiderMune />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      login: state.getIn(['login','login'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      logout() {
        dispatch(loginActionCreators.logout())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);