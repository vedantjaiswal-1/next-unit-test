import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { AddEmployee } from '../../../component/Employee/AddEmployee';
import { Header } from '../../../component/Layout/Header';
import { Sidebar } from '../../../component/Layout/Sidebar';
import EmployeeService from '../../../services/EmployeeService';

const AddEmployeePage = () => {
  const [employee, setEmployee] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  const loadEmployee = async (id: any) => {
    await EmployeeService.fetch(id)
      .then((response: any) => {
        setEmployee(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (id) {
      if (typeof id === 'string') {
        loadEmployee(id);
      }
    }
  }, []);

  return (
    <React.Fragment>
      <div>
        <div id='wrapper'>
          <Sidebar></Sidebar>
          <div id='content-wrapper' className='d-flex flex-column'>
            <div id='content'>
              <Header></Header>
              <AddEmployee {...employee}></AddEmployee>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddEmployeePage;
