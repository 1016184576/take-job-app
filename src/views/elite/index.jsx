import React from 'react';
import { connect } from 'react-redux';
import UserList from  '../../components/userList';

class Elite extends React.Component {
  componentWillMount(){
  }
  render() {
    return (
      <UserList
        type="elite"
      />
    )
  }
}


export default connect(state => ({ ...state }))(Elite);