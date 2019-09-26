import React from 'react';
import { connect } from 'react-redux';
import { NavBar, List, TextareaItem, Button, InputItem, WhiteSpace, Toast } from 'antd-mobile';
import AvatarSelect from '../../../components/avatarSelect'
import { updateInfo } from '../../../redux/action';


class EliteInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      avatar: ''
    }
  }
  componentWillMount(){
    this.setState({
      ...this.props.user
    })
  }

  handleChange = (key, val) => {
    this.setState({
      [key]: val
    })
  }

  avatarClick = (avatar) => {
    this.setState({ avatar: avatar.text });
  }

  handleClick = () => {
    this.props.updateInfo({
      avatar: this.state.avatar,
      title: this.state.title,
      desc: this.state.desc,
      userId: this.props.user.userId
    }).then(() => {
      this.props.history.push('/boss');
    }).catch(msg=>{
      Toast.fail(msg)
    })
  }
  render() {
    return (
      <div className="container">
        <NavBar mode="dark">牛人信息</NavBar>
        <AvatarSelect avatar={this.props.user.avatar}  avatarClick={this.avatarClick} />
        <WhiteSpace />
        <List>
          <InputItem placeholder="请输入职位" value={this.state.title} onChange={val => this.handleChange("title", val)}>职位</InputItem>
          <WhiteSpace />
          <TextareaItem placeholder="请输入个人简介" value={this.state.desc} onChange={val => this.handleChange("desc", val)} autoHeight={true} title="简介"></TextareaItem>
        </List>
        <WhiteSpace />
        <Button type="primary" onClick={this.handleClick}>保存</Button>
      </div>
    )
  }
}

export default connect(state => ({ ...state }), {
  updateInfo 
})(EliteInfo);