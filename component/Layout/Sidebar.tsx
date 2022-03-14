import Link from 'next/link';
import React from 'react';

export const Sidebar = () => {
  return (
    <React.Fragment>
      <ul className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion' id='accordionSidebar'>
        <Link href='/dashboard/'>
          <div className='sidebar-brand d-flex align-items-center justify-content-center'>
            <div className='sidebar-brand-icon text-info'>
              <i className='fas fa-users'></i>
            </div>
            <div className='sidebar-brand-text mx-3'>Employee Management</div>
          </div>
        </Link>

        <hr className='sidebar-divider my-0' />

        <li className='nav-item active'>
          <a className='nav-link' href='/employee/add/'>
            <i className='fas fa-fw fa-user'></i>
            <span>Add Employee</span>
          </a>
          <a className='nav-link' href='/employee/manage/'>
            <i className='fas fa-fw fa-book'></i>
            <span>Manage Employee</span>
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
};
