import React from 'react';
import { AddEmployee } from './AddEmployee';
import { ViewEmployee } from './ViewEmployee';

export const HomeEmployee = () => {
  return (
    <React.Fragment>
      <AddEmployee></AddEmployee>
      <ViewEmployee></ViewEmployee>
    </React.Fragment>
  );
};
