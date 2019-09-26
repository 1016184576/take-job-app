import React from 'react';
import UserList from  '../../components/userList';

export default class Boss extends React.Component {
  render() {
    return (
      <UserList 
        type="boss"
      />
    )
  }
}