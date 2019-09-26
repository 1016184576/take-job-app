import React from 'react';
import { connect } from 'react-redux';
import Logo from '../../components/logo';
import { Button, InputItem, WingBlank, WhiteSpace, List, Toast } from 'antd-mobile';
import './index.less';
import { login } from '../../redux/action';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      pwd: '',
      redirectAuth: false
    }
  }

  componentWillMount(){
    localStorage.clear();
  }

  handleRegister = () => {
    this.props.history.push('/register');
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }

  handleLogin = () => {
    if(!this.state.userName){
      return Toast.fail('用户名不能为空');
    }else if(!this.state.pwd){
      return Toast.fail('密码不能为空');
    }
    this.props.login({
      ...this.state
    }).then(() => {
      const { userType, history } = this.props;
      userType === 'boss' ? history.push('/elite') : history.push('/boss');
    }).catch(msg=>{
      Toast.fail(msg)
    })
  }

  render() {
    return (
      <div className="login-container">
        <Logo />
        <div className="content">
          <List className="user-info">
            <InputItem value={this.state.userName} onChange={val => this.handleChange('userName', val)} placeholder="请输入用户名">用户</InputItem>
            <InputItem type="password" value={this.state.pwd} onChange={val => this.handleChange('pwd', val)} placeholder="请输入密码">密码</InputItem>
          </List>
          <WingBlank>
            <Button type="primary" onClick={this.handleLogin}>登陆</Button>
            <WhiteSpace />
            <Button type="primary" onClick={this.handleRegister}>注册</Button>
          </WingBlank>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    userType: state.user.userType,
    isAuth: state.user.isAuth,
    errMsg: state.user.errMsg
  }
}

export default connect(mapStateToProps,
  { login })(Login);