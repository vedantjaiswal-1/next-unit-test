import React from 'react';
import { Container, Col, Row, Button} from 'react-bootstrap';

const Dash = () => {
  return (
    <Container>
      <div className='row justify-content-center'>
        <Col xl={10} lg={12} md={9}>
          <div className='card o-hidden border-0 shadow-lg my-5'>
            <div className='card-body p-0'>
              <Row>
                <Col lg={6} className={'d-none d-lg-block bg-login-image'}></Col>
                <Col lg={6}>
                  <div className='p-5'>
                    <div className='text-center'>
                      <h1 className='h4 text-gray-900 mb-4'>Welcome</h1>
                    </div>
                    <form className='user'>
                      <div className='form-group'>
                        <label>Email</label>
                        <input
                          name='email'
                          type='email'
                          className='form-control form-control-user'
                          placeholder='Enter Email Address...'
                        />
                      </div>

                      <div className='form-group'>
                        <label>Password</label>
                        <input
                          name='password'
                          type='password'
                          className='form-control form-control-user'
                          id='exampleInputPassword'
                          placeholder='Password'
                        />
                      </div>

                      <Button type='submit' className='btn btn-primary bg-gradient-primary btn-user btn-block'>
                        Login
                      </Button>
                    </form>
                    <hr />
                    <div className='text-center'>
                      <a className='small' href='forgot-password.html'>
                        Forgot Password?
                      </a>
                    </div>
                    <div className='text-center'>
                      <a className='small' href='/register'>
                        Create an Account!
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </div>
    </Container>
  );
};

export default Dash;
