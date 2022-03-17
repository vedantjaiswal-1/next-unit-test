import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Row, Col, Card, Button, FormLabel, FormGroup, FormText } from 'react-bootstrap';
import { NextPage } from 'next';
import Router from 'next/router';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { ToastUtil } from '../../utils/toast';
import LoginService from '../../services/LoginService';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email is required'),
  password: Yup.string().required('Password is required')
});

const Login: NextPage = () => {
  const initialValue = {
    email: '',
    password: ''
  };

  return (
    <React.Fragment>
      <Head>
        <title data-testid='title'>Login</title>
        <meta name='description' content='Login Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Formik
        initialValues={initialValue}
        validationSchema={LoginSchema}
        validateOnChange={true}
        onSubmit={(values) => {
          LoginService.create(values)
            .then((response: any) => {
              ToastUtil.success('Login Success');
              localStorage.setItem('user', JSON.stringify(response));
              Router.push('/employee/add');
            })
            .catch((error: any) => {
              ToastUtil.error('Invalid Email or password');
            });
        }}
      >
        {({ errors, touched }) => (
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
                            <div className='form-group'>
                              <label htmlFor='exampleInputEmail'>Email</label>
                              <Field
                                name='email'
                                type='email'
                                className='form-control form-control-user'
                                id='exampleInputEmail'
                                placeholder='Enter Email Address...'
                                data-testid='email'
                              />
                              {errors.email && touched.email ? (
                                <FormText className='text-danger small'>
                                  <div data-testid='error-msg'>{errors.email}</div>
                                </FormText>
                              ) : null}
                            </div>

                            <div className='form-group'>
                              <label htmlFor='exampleInputPassword'>Password</label>
                              <Field
                                name='password'
                                type='password'
                                className='form-control form-control-user'
                                id='exampleInputPassword'
                                placeholder='Password'
                                data-testid='password'
                              />
                              {errors.password && touched.password ? (
                                <FormText className='text-danger small'>
                                  <div>{errors.password}</div>
                                </FormText>
                              ) : null}
                            </div>

                            <Button
                              // onClick={onSubmit}
                              type='submit'
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
        )}
      </Formik>
    </React.Fragment>
  );
};

export default Login;
