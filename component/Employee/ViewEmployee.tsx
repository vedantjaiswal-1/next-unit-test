import React from 'react'
import { Table, Container, OverlayTrigger, Tooltip } from "react-bootstrap";

export const ViewEmployee = () => {
  return (
    <React.Fragment>
        <div className="table-container">
        <Container fluid>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">View Employee</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <Table className="table table-bordered" id="dataTable">
                  <thead className="card-header">
                    <tr className="text-gray-800">
                      <th>Sr. No</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {books.map((item: any, index: number) => {
                      return ( */}
                        <tr>
                          <td>1</td>
                          <td>Vedant</td>
                          <td>Jaiswal</td>
                          <td>
                            <OverlayTrigger
                              placement="left"
                              overlay={
                                <Tooltip placement={"left"} id={"status"}>
                                  Add
                                </Tooltip>
                              }
                            >
                              <i
                                className="fa fa-edit pointer ml-3 text-success"
                                // onClick={() => onUpdateBook(item)}
                              />
                            </OverlayTrigger>

                            <OverlayTrigger
                              placement="right"
                              overlay={
                                <Tooltip placement={"right"} id={"status"}>
                                  Delete
                                </Tooltip>
                              }
                            >
                              <i
                                className="fa fa-trash pointer ml-3 text-danger"
                                // onClick={() => onDeleteBook(item)}
                              />
                            </OverlayTrigger>
                          </td>
                        </tr>
                      {/* );
                    })} */}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}
