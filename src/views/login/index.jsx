import React from 'react';
import Logo from '../../components/logo';
import { Button, InputItem, WingBlank, WhiteSpace, List } from 'antd-mobile';
import './index.less';

export default class Login extends React.Component {
  handerRegister = () => {
    this.props.history.push('/register');
  }
  render() {
    return (
      <div className="login-container">
        <Logo />
        <div className="content">
          <List className="user-info">
            <InputItem placeholder="请输入用户名">用户</InputItem>
            <InputItem placeholder="请输入密码">密码</InputItem>
          </List>
          <WingBlank>
            <Button type="primary">登陆</Button>
            <WhiteSpace />
            <Button type="primary" onClick={this.handerRegister}>注册</Button>
          </WingBlank>
        </div>
      </div>
    )
  }
}