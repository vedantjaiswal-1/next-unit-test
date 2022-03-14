import React from 'react';
import { ManageEmployee } from '../../../component/Employee/ManageEmployee';
import { Header } from '../../../component/Layout/Header';
import { Sidebar } from '../../../component/Layout/Sidebar';

const ManageEmployeePage = () => {
  return (
    <React.Fragment>
      <div>
        <div id='wrapper'>
          <Sidebar></Sidebar>
          <div id='content-wrapper' className='d-flex flex-column'>
            <div id='content'>
              <Header></Header>
              <ManageEmployee></ManageEmployee>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ManageEmployeePage;
