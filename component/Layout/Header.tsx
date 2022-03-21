import React from 'react';
import { Button } from 'react-bootstrap';

export const Header = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <React.Fragment>
      <nav className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>
        <button id='sidebarToggleTop' className='btn btn-link d-md-none rounded-circle mr-3'>
          <i className='fa fa-bars'></i>
        </button>

        <ul className='navbar-nav ml-auto'>
          <li className='nav-item dropdown no-arrow'>
            <span className='mr-3 d-none d-lg-inline text-gray-800'></span>
            <Button variant='outline-dark' onClick={() => logout()} id="logout">
              <i className='fas fa-sign-out-alt fa-fw text-gray-800'></i>
              Logout
            </Button>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};
