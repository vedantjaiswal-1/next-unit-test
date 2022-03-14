import React from 'react';
import { AddEmployee } from '../../../component/Employee/AddEmployee';
import { Header } from '../../../component/Layout/Header';
import { Sidebar } from '../../../component/Layout/Sidebar';

const CreateEmployeePage = () => {
  return (
    <React.Fragment>
      <div>
        <div id='wrapper'>
          <Sidebar></Sidebar>
          <div id='content-wrapper' className='d-flex flex-column'>
            <div id='content'>
              <Header></Header>
              <AddEmployee></AddEmployee>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateEmployeePage;
