import React from 'react';
import { Row, Col, Button, Container, FormText, FormLabel } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const AddEmployeeSchema = Yup.object().shape({
  first_name: Yup.string().required('First Name is required'),
  last_name: Yup.string().required('Last Name is required')
});

export const AddEmployee = () => {
  const initialValue = {
    first_name: '',
    last_name: ''
  };
  return (
    <React.Fragment>
      <Formik
        initialValues={initialValue}
        validationSchema={AddEmployeeSchema}
        validateOnChange={true}
        enableReinitialize={true}
        onSubmit={(values, actions) => {
          console.log(values);
          //   BookService.save(values)
          //     .then((res: any) => {
          //       actions.resetForm({});
          //       toast.success("📖 Book Added!");
          //       onSaveBookAdd();
          //     })
          //     .catch((err: any) => {
          //       toast.error("Book not Added");
          //     });
        }}
      >
        {({ errors, touched, values, handleChange }) => (
          <Container fluid>
            <div className='card mb-4 border-bottom-primary'>
              <div className='card-header'>
                <h6 className='m-0 font-weight-bold text-primary'>Add Employee</h6>
              </div>
              <div className='card-body'>
                <Form>
                  <Row>
                    <Col sm={4}>
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
                        <FormText className='text-danger'>
                          <div>{errors.first_name}</div>
                        </FormText>
                      ) : null}
                    </Col>
                    <Col sm={4}>
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
                        <FormText className='text-danger'>
                          <div>{errors.first_name}</div>
                        </FormText>
                      ) : null}
                    </Col>
                    <br />
                    <Col sm={4} className='pt-1 mt-4'>
                      <Button type='submit' className='btn btn-primary btn-user btn-block btn-sm float-right'>
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Container>
        )}
      </Formik>
    </React.Fragment>
  );
};
