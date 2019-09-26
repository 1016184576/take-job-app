import React from 'react';
import { TabBar } from 'antd-mobile';


export default class NavLink extends React.Component {
  handelPress = value => {
    this.props.handelPress(value);
  }
  render() {
    return (
      <TabBar>
        {
          this.props.data.filter(nav => nav.show).map(v => (
            <TabBar.Item
              icon={{ uri: v.icon }}
              selectedIcon={{ uri: v.selectedIcon }}
              selected={this.props.selectedTab === v.path}
              key={v.path}
              title={v.tabText}
              onPress={() => {
                this.handelPress(v.path)
              }}
            ></TabBar.Item>
          ))
        }
      </TabBar>
      
    )
  }
}