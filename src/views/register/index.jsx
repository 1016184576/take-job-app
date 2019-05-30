import React from 'react';
import Logo from '../../components/logo';
import { Button, InputItem, Radio, WhiteSpace, List } from 'antd-mobile';

const RadioItem = Radio.RadioItem;

export default class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      checked:'elite',
      username:'',
      password:'',
      confirmPassword:''
    }
  }
  handelChange(key,value){
    this.setState({
      [key]: value
    })
  }
  handerRegister = ()=>{
    console.log(this.state)
  }
  render(){
    return(
      <div className="register-container">
        <Logo />
        <div className="content">
          <List className="user-info">
            <InputItem placeholder="请输入用户名" onChange={val => this.handelChange("username",val)}>用户</InputItem>
            <WhiteSpace/>
            <InputItem type="password" placeholder="请输入密码" onChange={val => this.handelChange("password",val)}>密码</InputItem>
            <WhiteSpace/>
            <InputItem type="password" placeholder="请确认密码" onChange={val => this.handelChange("confirmPassword",val)}>确认密码</InputItem>
            <WhiteSpace/>
            <RadioItem checked={this.state.checked === "elite"} onChange={()=> this.handelChange("checked","elite")}>牛人</RadioItem>
            <WhiteSpace/>
            <RadioItem checked={this.state.checked === "boss"} onChange={()=> this.handelChange("checked","boss")}>Boss</RadioItem>
          </List>
          <Button type="primary" onClick={this.handerRegister}>注册</Button>
        </div>
      </div>
    )
  }
}
