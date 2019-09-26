import React from 'react';
import io from 'socket.io-client';
import { List,InputItem } from 'antd-mobile';


import './index.less';

const socket = io('ws://localhost:8093');

class Chat extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      msg:'',
      charList:[]
    }
  }
  componentDidMount(){
    socket.on('broadcast',data => {
      console.log(data)
      this.setState({
        charList: [...this.state.charList,data.msg]
      })
    })
  }
  //发送消息
  sendMessage(){
    alert(this.state.msg)
    if(this.state.msg != ''){
     alert(222)
      socket.emit('sendMessage',{
        msg: this.state.msg
      });
      this.setState({
        msg: ''
      })
    }
  }
  render(){
    return (
      <div>
        <div className="chat-list">
          {
            this.state.charList.map(v=>{
              return <p key={v}>{v}</p>
            })
          }
        </div>
        <div className="footer">
          <InputItem 
            placeholder="请输入" 
            value={this.state.msg}
            onChange={(v)=>{
              this.setState({
                msg: v
              })
            }} 
            className="msgText" 
          />
          <span className="sendmsg" onClick={()=>this.sendMessage()}>发送</span>
        </div>
      </div>
    )
  }
}

export default Chat;