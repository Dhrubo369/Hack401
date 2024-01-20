import React, { useState } from 'react';
import {
  PhoneOutlined,
  HomeOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AreaChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';

function getItem(label, key, icon, children, type) 
{
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Home', '1', <HomeOutlined/>),
  getItem('Inbox', '2', <MailOutlined />),
  getItem('Tracker', 'sub1', <AreaChartOutlined  />, [
    getItem('Piechart', '5'),
    getItem('Graphs', '6'),
    getItem('Line Chart', '7'),
  ]),
  getItem('Contact Us', 'sub2', < PhoneOutlined/>, [
    getItem('Help', '9'),
    getItem('Email: thack@sxyz.com', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
{/* 
      <div theme="dark" style={{ textAlign:'left' }}>
      <Button
        type="primary"
        theme="dark"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      </div> */}
      
      <div theme="dark" style={{ textAlign:'left' }}></div>
      <Menu 
        className = "sidebar"
        defaultSelectedKeys={['1']}
        mode= "inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        textAlign="left"
        
      />
      </div>
  );
};
export default SideBar;