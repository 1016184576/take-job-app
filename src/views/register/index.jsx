import React from 'react';
import { connect } from 'react-redux';
import { Button, InputItem, Radio, WhiteSpace, List, Toast } from 'antd-mobile';
import Logo from '../../components/logo';
import { register } from '../../redux/action';

const RadioItem = Radio.RadioItem;

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: 'elite',
      username: '',
      password: '',
      confirmPassword: ''
    }
  }
  componentWillMount(){
    localStorage.clear();
  }
  handelChange(key, value) {
    this.setState({
      [key]: value
    })
  }
  handerRegister = () => {
    const { username, password, confirmPassword } = this.state;
    if(!username){
      return Toast.fail('用户名不能为空');
    }else if(!password || !confirmPassword){
      return Toast.fail('密码不能为空');
    }else if(password !== confirmPassword){
      return Toast.fail('两次密码不一致');
    }
    this.props.register({
      ...this.state
    }).then(() => {
      Toast.success('注册成功!', 2, () => {
        this.props.history.push({
          pathname: this.state.checked === 'elite' ? '/eliteinfo' : '/bossinfo',
        })
      })
    }).catch(msg => {
      Toast.fail(msg)
    })
  }
  render() {
    return (
      <div className="register-container">
        <Logo />
        <div className="content">
          <List className="user-info">
            <InputItem placeholder="请输入用户名" value={this.state.username} onChange={val => this.handelChange("username", val)}>用户</InputItem>
            <WhiteSpace />
            <InputItem type="password" placeholder="请输入密码" value={this.state.password} onChange={val => this.handelChange("password", val)}>密码</InputItem>
            <WhiteSpace />
            <InputItem type="password" placeholder="请确认密码" value={this.state.confirmPassword} onChange={val => this.handelChange("confirmPassword", val)}>确认密码</InputItem>
            <WhiteSpace />
            <RadioItem checked={this.state.checked === "elite"} onChange={() => this.handelChange("checked", "elite")}>牛人</RadioItem>
            <WhiteSpace />
            <RadioItem checked={this.state.checked === "boss"} onChange={() => this.handelChange("checked", "boss")}>Boss</RadioItem>
          </List>
          <Button type="primary" onClick={this.handerRegister}>注册</Button>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    errMsg: state.user.errMsg
  }
}


export default connect(mapStateToProps,
  { register })(Register);