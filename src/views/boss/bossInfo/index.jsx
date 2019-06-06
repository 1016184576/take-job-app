import React from 'react';
import { connect } from 'react-redux';
import { NavBar, List, TextareaItem, Button, InputItem, WhiteSpace, Toast } from 'antd-mobile';
import AvatarSelect from '../../../components/avatarSelect'
import { updateInfo } from '../../../redux/action';

class BossInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      company: '',
      money: '',
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
      ...this.state,
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
        <NavBar mode="dark">Boss信息</NavBar>
        <AvatarSelect avatar={this.props.user.avatar}  avatarClick={this.avatarClick} />
        <WhiteSpace />
        <List>
          <InputItem placeholder="请输入职位" value={this.state.title} onChange={val => this.handleChange("title", val)}>职位</InputItem>
          <WhiteSpace />
          <InputItem placeholder="请输入公司" value={this.state.company} onChange={val => this.handleChange("company", val)}>公司</InputItem>
          <WhiteSpace />
          <InputItem placeholder="请输入薪资" value={this.state.money} onChange={val => this.handleChange("money", val)}>薪资</InputItem>
          <WhiteSpace />
          <TextareaItem placeholder="请输入描述" value={this.state.desc} onChange={val => this.handleChange("desc", val)} autoHeight={true} title="描述"></TextareaItem>
        </List>
        <WhiteSpace />
        <Button type="primary" onClick={this.handleClick}>保存</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    errMsg: state.user.errMsg,
    user: state.user
  }
}

export default connect(mapStateToProps, { updateInfo })(BossInfo);