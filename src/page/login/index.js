import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import '../../App.css';

const FormItem = Form.Item;

class Login extends Component {

  render() {
    const { loginStatus } = this.props;

    if(!loginStatus) {
        return (
            <Form className="login-form">
              <FormItem>     
                  <Input 
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                  placeholder="Username" 
                  ref={(input) => {this.account = input}}
                  />
              </FormItem>
              <FormItem>
                  <Input 
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                  type="password" 
                  placeholder="Password" 
                  ref={(input) => {this.password = input}}
                  />
              </FormItem>
              <FormItem>
                {/* <a className="login-form-forgot" href="#">Forgot password</a> */}
                <Button 
                type="primary" 
                htmlType="submit" 
                className="login-form-button"
                onClick={() => this.props.login(this.account, this.password)}
                >
                  登录
                </Button>
                {/* Or <a href="">register now!</a> */}
              </FormItem>
            </Form>
          )
        }else{
            return <Redirect to='/'/>
        }
    }
    
}
const mapStateToProps = (state) => ({
    loginStatus:state.getIn(['login','login'])
})
  
const mapDispatchToProps = (dispatch) => ({
    login(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value))
        // console.log(accountElem.value, passwordElem.value);
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Login) ;