import React from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import AuthRouter from '../../router/authRouter';
import { NavBar } from 'antd-mobile';
import NavLink from '../../components/navLink';
import Boss from '../boss';
import Elite from '../elite';
import Message from '../messgae';
import Center from '../center';
import './index.less';



class Main extends React.Component {
  constructor(props) {
    super(props)
    const { pathname } = this.props.location;
    this.state = {
      selectedTab: pathname,
      navList: [{
        title: 'boss列表',
        path: '/boss',
        component: Boss,
        tabText: 'boss',
        icon: require('../../components/navLink/imgs/job.png'),
        selectedIcon: require('../../components/navLink/imgs/job-active.png'),
        show: this.props.user.userType === 'elite',
      }, {
        title: '牛人列表',
        path: '/elite',
        component: Elite,
        tabText: '牛人',
        icon: require('../../components/navLink/imgs/boss.png'),
        selectedIcon: require('../../components/navLink/imgs/boss-active.png'),
        show: this.props.user.userType === 'boss',
      }, {
        title: '消息列表',
        path: '/message',
        component: Message,
        tabText: '消息',
        icon: require('../../components/navLink/imgs/msg.png'),
        selectedIcon: require('../../components/navLink/imgs/msg-active.png'),
        show: true,
      }, {
        title: '个人中心',
        path: '/center',
        component: Center,
        tabText: '我的',
        icon: require('../../components/navLink/imgs/user.png'),
        selectedIcon: require('../../components/navLink/imgs/user-active.png'),
        show: true,
      }]
    }
  }

  footerStyle = { position: "fixed", bottom: 0, left: 0, right: 0 };

  componentWillMount() {
  }

  handelPress = (selectedTab) => {
    this.setState({ selectedTab });
    this.props.history.push(selectedTab)
  }

  //渲染路由
  renderRoute() {
    const { navList } = this.state;
    return navList.map(v => <AuthRouter key={v.path} path={v.path} component={v.component} />);
  }

  render() {
    const { pathname } = this.props.location;
    const nav = this.state.navList.find(v => {
      return pathname === v.path;
    })
    if(!nav) return <Redirect to="/login" />
    return (
      <div className="container">
        <NavBar>{nav.title}</NavBar>
        <Switch>
          {
            this.renderRoute()
          }
        </Switch>
        <div style={this.footerStyle}>
          <NavLink data={this.state.navList} selectedTab={this.state.selectedTab} handelPress={this.handelPress} />
        </div>
      </div>
    )
  }
}

export default connect(state => ({ ...state }))(Main);