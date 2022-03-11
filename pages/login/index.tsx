import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import Image from 'next/image';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log(email, password);
  };
  return (
    <React.Fragment>
      <Head>
        <title data-testid='title'>Login</title>
        <meta name='description' content='Login Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container className='mt-5'>
        <Row>
          <Col lg={6}>
            <Card border='primary'>
              <Card.Body>
                <Card.Title>Login</Card.Title>
                <Form>
                  <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='name@example.com'
                      data-testid='email'
                      value={email}
                      onChange={(event) => {
                        setEmail(event.currentTarget.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Password'
                      value={password}
                      data-testid='password'
                      onChange={(event) => {
                        setPassword(event.currentTarget.value);
                      }}
                    />
                  </Form.Group>

                  <button onClick={onSubmit} type='button' className='btn btn-primary'>
                   Login
                  </button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Image src='/undraw_Programming_re_kg9v.png' width={1027} height={732}></Image>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Login;
