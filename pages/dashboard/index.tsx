import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { HomeEmployee } from '../../component/Employee/HomeEmployee';
import { Header } from '../../component/Layout/Header';
import { Sidebar } from '../../component/Layout/Sidebar';

const Dashboard = () => {
  return (
    <div>
      <div id='wrapper'>
        <Sidebar></Sidebar>
        <div id='content-wrapper' className='d-flex flex-column'>
          <div id='content'>
            <Header></Header>
            <HomeEmployee></HomeEmployee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
