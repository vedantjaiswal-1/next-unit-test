import Link from 'next/link';
import React from 'react';

export const Sidebar = () => {
  return (
    <React.Fragment>
      <ul className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion' id='accordionSidebar'>
        <Link href='/'>
          <div className='sidebar-brand d-flex align-items-center justify-content-center' id='icon'>
            <div className='sidebar-brand-icon text-info'>
              <i className='fas fa-users'></i>
            </div>
            <div className='sidebar-brand-text mx-3'>Employee Management</div>
          </div>
        </Link>

        <hr className='sidebar-divider my-0' />

        <li className='nav-item active'>
          <a className='nav-link' href='/employee/add/' id='add-employee'>
            <i className='fas fa-fw fa-user'></i>
            <span>Add Employee</span>
          </a>
          <a className='nav-link' href='/employee/manage/' id='manage-employee'>
            <i className='fas fa-fw fa-book'></i>
            <span>Manage Employee</span>
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
};
