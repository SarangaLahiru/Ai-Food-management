
import React from 'react';
import Sidebar from './sidebar/sidebar';
import '../style.css';
import './Layout.css';
import Dashheader from './dashboardheader/dashheader';
import { Divider } from '@mui/material';

const Layout = ({ children }) => {

  return (
   <>
    <div className="container">
      
      <Sidebar/>
      
      
      <div className="container1">

        <Dashheader/>
        <Divider sx={{ backgroundColor: 'white', margin: '15px' }} />
        
        {children}</div>
    </div>
   
   </>
  );
};

export default Layout;
