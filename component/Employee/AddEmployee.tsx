import React from 'react';
import { Row, Col, Button, Container, FormText, FormLabel } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import EmployeeService from '../../services/EmployeeService';
import { ToastUtil } from '../../utils/toast';
import Router from 'next/router';

const AddEmployeeSchema = Yup.object().shape({
  first_name: Yup.string().required('First Name is required'),
  last_name: Yup.string().required('Last Name is required')
});

export const AddEmployee = (props: any) => {
  const initialValue = {
    first_name: props?.first_name,
    last_name: props?.last_name
  };
  return (
    <React.Fragment>
      <Formik
        initialValues={initialValue}
        validationSchema={AddEmployeeSchema}
        validateOnChange={true}
        enableReinitialize={true}
        onSubmit={(values, actions) => {
          EmployeeService.save(props._id, values)
            .then((res: any) => {
              ToastUtil.success('Employee Added.');
              Router.push("/employee/manage")
            })
            .catch((err: any) => {
              ToastUtil.error('Unable to create!');
            });
        }}
      >
        {({ errors, touched, values, handleChange }) => (
          <Container fluid>
            <Col lg={6}>
              <div className='card mb-4 border-bottom-primary'>
                <div className='card-header'>
                  <h6 className='m-0 font-weight-bold text-primary'>Add Employee</h6>
                </div>
                <div className='card-body'>
                  <Form>
                    <Row className='mb-3'>
                      <Col sm={10}>
                        <FormLabel className='small'>First Name</FormLabel>
                        <Field
                          name='first_name'
                          placeholder='First Name'
                          className='form-control form-control-sm'
                          value={values.first_name ? values.first_name : ''}
                          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            handleChange(event);
                          }}
                        />
                        {errors.first_name && touched.first_name ? (
                          <FormText className='text-danger small'>
                            <div>{errors.first_name}</div>
                          </FormText>
                        ) : null}
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={10}>
                        <FormLabel className='small'>Last Name</FormLabel>
                        <Field
                          name='last_name'
                          placeholder='Last Name'
                          className='form-control form-control-sm'
                          value={values.last_name ? values.last_name : ''}
                          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            handleChange(event);
                          }}
                        />
                        {errors.last_name && touched.last_name ? (
                          <FormText className='text-danger small'>
                            <div>{errors.last_name}</div>
                          </FormText>
                        ) : null}
                      </Col>
                    </Row>
                    <Row>
                      <br />
                      <Col sm={10} className='pt-1 mt-4'>
                        <Button type='submit' className='btn btn-primary btn-user btn-block btn-sm float-right'>
                          Add
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
            </Col>
          </Container>
        )}
      </Formik>
    </React.Fragment>
  );
};
