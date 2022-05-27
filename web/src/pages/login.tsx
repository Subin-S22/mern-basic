import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Login = () => {
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={(values) => console.log(values)}>
      <Form>
        <Field name="login" type="email" placeholder="Email" />
        <ErrorMessage name='login' />
        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" />
      </Form>
    </Formik>

  )
}

export default Login;