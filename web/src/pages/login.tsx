import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Button from 'src/modules/button/button'
import styles from '../styles/login.module.css'
import clsx from 'src/utils/clsx'


const Login: React.FC = () => {
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={(value) => { console.log(value) }}>
      <Form className={clsx(styles.form, styles.form_flex)}>
        <label id='email'>Email</label>
        <Field name="email" type="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />
        <label id='password'>Password</label>
        <Field name="password" type="password" palceholder="Password" />
        <ErrorMessage name="password" component="div" />
        <Button buttonName='Submit' buttonClick={() => { '' }} type="submit" />
      </Form>
    </Formik>
  )
}

export default Login;