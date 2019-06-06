import React from 'react';
import { Grid, List } from 'antd-mobile';
import './index.less';

export default class AvatarSelect extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      avatar:{}
    }
  }
  componentWillMount(){
    if(this.props.avatar){
      this.setState({
        avatar:{
          text: this.props.avatar,
          icon: require(`./imgs/${this.props.avatar}.png`)
        }
      })
    }
  }

  render(){
    const avatarList = "boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra".split(',').map(key=>{
      return {
        icon: require(`./imgs/${key}.png`),
        text: key
      }
    })
    const gridHeader = this.state.avatar.icon ? 
      (
        <div className="gridHeader">
          <span>您选中的头像</span>
          <img src={this.state.avatar.icon} alt=""/>
        </div>
      ) : '您选中的头像';
    return (
      <div>
        <List renderHeader={()=>gridHeader}>
          <Grid
            data={avatarList}
            columnNum={5}
            onClick={(elm)=>{
              this.setState({
                avatar: elm
              })
              this.props.avatarClick(elm)
            }}
          />
        </List>
      </div>
    )
  }
}