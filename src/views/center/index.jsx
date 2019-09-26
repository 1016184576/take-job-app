import React from 'react';
import { connect } from 'react-redux';
import { List, Result, Button, WingBlank, Modal } from 'antd-mobile';
import { $localStorage } from '../../common/storage';
import browserCookies from 'browser-cookies';
import { loginOut } from '../../redux/action';
import './index.less'



class Center extends React.Component {
  constructor(props){
    super(props);
    this.loginOutHandle = this.loginOutHandle.bind(this);
  }
  loginOutHandle(){
    const _self = this;
    Modal.alert('确认', '您确认退出吗？', [
      { text: '取消', onPress: () => console.log('cancel') },
      { text: '确认', onPress: () => {
        $localStorage.removeAll();
        browserCookies.erase('userId');
        _self.props.loginOut();
        _self.props.history.replace({
          pathname: "/login"
        })
      }},
    ])
  }
  render() {
    const user = this.props.user;
    return (
      <div className="center">
        <Result
          imgUrl = {require(`../../components/avatarSelect/imgs/${user.avatar ? user.avatar : 'boy'}.png`)}
          title={user.userName}
          message={<div>{user.userType === 'boss' ? 'Boss' : '牛人'}</div>}
        ></Result>
        <List
          renderHeader={() => '简介'}
        >
          <List.Item extra={user.title}>{user.userType === 'boss' ? '招聘职位' : '应聘职位'}</List.Item>
          {
            user.money ? <List.Item extra={user.money}>{user.userType === 'boss' ? '职位薪资' : '薪资范围'}</List.Item> : null 
          }
          <List.Item extra={user.desc} wrap={true} align="top">{user.userType === 'boss' ? '职位要求' : '个人描述'}</List.Item>
         
        </List>
        <WingBlank>
          <Button type="primary" className="login-out" onClick={this.loginOutHandle}>退出</Button>
        </WingBlank>
      </div>
    )
  }
}

export default connect(state => ({ ...state }), { loginOut })(Center);