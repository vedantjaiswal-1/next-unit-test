import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { NextPage } from 'next';

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    localStorage.setItem("user", JSON.stringify(email));
    alert(`Email: ${email} \nPassword: ${password}`);
  };
  return (
    <React.Fragment>
      <Head>
        <title data-testid='title'>Login</title>
        <meta name='description' content='Login Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container>
        <div className='row justify-content-center mt-5'>
          <Col xl={10} lg={12} md={9}>
            <Card className='o-hidden border-0 shadow-lg my-5'>
              <Card.Body className='p-0'>
                <Row>
                  <Col lg={6} className={'d-none d-lg-block bg-login-image'}></Col>
                  <Col lg={6}>
                    <div className='p-5'>
                      <div className='text-center'>
                        <h1 className='h4 text-gray-900'>Welcome to</h1>
                        <p className='mb-4 text-primary'>Employee Management</p>
                      </div>
                      <Form className='user'>
                        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type='email'
                            placeholder='name@gmail.com'
                            value={email}
                            data-testid='email'
                            className='form-control-user'
                            onChange={(event) => {
                              setEmail(event.currentTarget.value);
                            }}
                          />
                        </Form.Group>

                        <Form.Group className='mb-4' controlId='exampleForm.ControlInput2'>
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type='password'
                            placeholder='Password'
                            value={password}
                            data-testid='password'
                            className='form-control-user'
                            onChange={(event) => {
                              setPassword(event.currentTarget.value);
                            }}
                          />
                        </Form.Group>

                        <Button
                          onClick={onSubmit}
                          type='button'
                          className='btn btn-primary bg-gradient-primary btn-user btn-block'
                        >
                          Login
                        </Button>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Login;
