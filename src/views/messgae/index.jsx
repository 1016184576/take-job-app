import React from 'react';
import { connect } from 'react-redux';



class Message extends React.Component {
  componentWillMount(){
    console.log(this.props.location.pathname)
  }
  render() {
    return (
      <div className="container">
        消息列表
      </div>
    )
  }
}

export default connect(state => ({ ...state }))(Message);