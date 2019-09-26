import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { WingBlank, WhiteSpace, Card } from 'antd-mobile';

import { getUserList } from '../../redux/action';


class UserList extends React.Component {
  componentWillMount() {
    this.props.getUserList(this.props.type);
  }
  handleClick(user) {
    this.props.history.push(`/chat/${user.username}`);
  }
  render() {
    return (
      <div className="user-list">
        {
          this.props.chatuser.userList.map(v => (
            v.avatar ? <WingBlank key={v._id}>
              <WhiteSpace></WhiteSpace>
              <Card onClick={() => this.handleClick(v)}>
                <Card.Header
                  title={v.username}
                  thumb={require(`../../components/avatarSelect/imgs/${v.avatar}.png`)}
                  extra={v.title}
                ></Card.Header>
                <Card.Body>
                  {v.desc}
                </Card.Body>
              </Card>
            </WingBlank> : null
          ))
        }
      </div>
    )
  }
}


export default connect(state => ({ ...state }), {
  getUserList
})(withRouter(UserList));