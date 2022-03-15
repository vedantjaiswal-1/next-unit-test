import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Table, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EmployeeService from '../../services/EmployeeService';
import { ToastUtil } from '../../utils/toast';

export const ManageEmployee = () => {
  const [employee, setEmployee] = useState([]);

  const loadEmployee = async () => {
    await EmployeeService.list()
      .then((response: any) => {
        setEmployee(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const deleteEmployee = async (id: any) => {
    await EmployeeService.delete(id)
      .then((response: any) => {
        ToastUtil.success('Employee Deleted');
        loadEmployee();
      })
      .catch((error: any) => {
        ToastUtil.error(error);
      });
  };

  useEffect(() => {
    loadEmployee();
  }, []);
  return (
    <React.Fragment>
      <div className='table-container'>
        <Container fluid>
          <div className='card shadow mb-4'>
            <div className='card-header py-3'>
              <h6 className='m-0 font-weight-bold text-primary'>Manage Employee</h6>
            </div>
            <div className='card-body'>
              <div className='table-responsive' data-testid="table">
                <Table className='table table-bordered' id='dataTable'>
                  <thead className='card-header'>
                    <tr className='text-gray-800'>
                      <th>Sr. No</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employee.map((item: any, index: number) => {
                      return (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>{item.first_name}</td>
                          <td>{item.last_name}</td>
                          <td>
                            <OverlayTrigger
                              placement='left'
                              overlay={
                                <Tooltip placement={'left'} id={'status'}>
                                  Edit
                                </Tooltip>
                              }
                            >
                              <Link href={`/employee/add/${item._id}`}>
                                <i className='fa fa-edit pointer ml-3 text-success' />
                              </Link>
                            </OverlayTrigger>

                            <OverlayTrigger
                              placement='right'
                              overlay={
                                <Tooltip placement={'right'} id={'status'}>
                                  Delete
                                </Tooltip>
                              }
                            >
                              <i
                                className='fa fa-trash pointer ml-3 text-danger'
                                onClick={() => deleteEmployee(item._id)}
                              />
                            </OverlayTrigger>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};
