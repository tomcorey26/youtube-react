import React from 'react';
import {SideBarItem} from './SideBarItem/SideBarItem';
import {Menu} from 'semantic-ui-react';
import './SideBar.scss';

export class SideBar extends React.Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed='left' className='side-nav'>
        <SideBarItem highlight={true} label='Home' icons='home'/>
        <SideBarItem label='Trending' icons='fire'/>
        <SideBarItem label='Followers' icons='spy'/>
        <SideBarItem label='History' icons='history'/>
        <SideBarItem label='Watch later' icons='clock'/>
        <SideBarItem label='Liked videos' icons='thumbs up'/>
        <SideBarItem label='Movies and Shows' icons='film'/>
        <SideBarItem label='Report history' icons='flag'/>
        <SideBarItem label='Help' icons='help circle'/>
        <SideBarItem label='Send feedback' icons='comment'/>
      </Menu>
    )
  }
}