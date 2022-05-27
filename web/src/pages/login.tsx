import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Button from 'src/modules/button/button'
import styles from '../styles/login.module.css'
import clsx from 'src/utils/clsx'
import { FieldProp } from 'src/types/login'
import { loginAPI } from 'src/services/login'
import { useNavigate } from 'react-router-dom'


const Login: React.FC = () => {
  const router = useNavigate();

  const loginSubmit = async (values: FieldProp) => {
    console.log('res values', values)
    try {
      const res = await loginAPI(values)
      localStorage.setItem('login-status', 'true')
      if (res) router('/home')
    } catch (err) {
      console.log('res in err', err)
    }
  }
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={loginSubmit}>
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