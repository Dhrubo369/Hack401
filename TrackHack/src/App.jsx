import { useState } from 'react'
import SideBar from './SideBar.jsx'
import Layout from 'antd/es/layout/layout.js'
import './App.css'
import image from './bg.jpeg'
import Home from './Home.jsx'; 
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { Menu, Button, theme } from 'antd';

const { Header, Sider, Content } = Layout;
function App() {
  
  const [currentPage, setCurrentPage] = useState('home'); // Track the current page

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const renderPage = () => {
    // Render the corresponding component based on the current page
    switch (currentPage) {
      case 'home':
        return <Home />;
      // Add more cases for other pages if needed
      default:
        return null;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', width:'100%' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        // width: '100%',
        // display: 'block',
        alignItems: 'center',
      }}>
        <div className="demo-logo-vertical" />
        <SideBar/>
      </Sider>
      <Layout style={{ minHeight: '100vh', width: '100%'}}>
      <Header
          style={{
            position: 'fixed', // Fixed position
            width: '100%', // Full width
            padding: 0,
            background: colorBgContainer,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1000, // Adjust z-index as needed
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              type="secondary"
              theme="dark"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <h1 style={{ marginLeft: '20px', padding:'8px', marginRight: '20px' }}> TrackHacks </h1>
          </div>
        </Header>
        <Content
          style={{
            margin: 'auto',
            padding: 24,
            //minHeight: 280,
            backgroundImage:`url(${image})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover", 
            height:1000,
            width:1000,
            
            borderRadius: borderRadiusLG,
            flex:1,
            marginTop: '64px',
            color: 'white'
          }}
        >
          {renderPage()} {/* Render the current page */}
        </Content>
      </Layout>
    </Layout>
  );
};


export default App
