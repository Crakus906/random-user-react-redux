/* eslint-disable react/prop-types */
import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { Button } from '@/components/index';
import { useHistory } from 'react-router-dom';
import st from './styles.scss';

export default function SingUpFofrm({ onHide }) {
  const history = useHistory();
  return (
    <div className={st.singUpFofrm}>
     <Formik className={st.formik}
       initialValues={{ email: '', password: '' }}
       // eslint-disable-next-line react/jsx-no-duplicate-props
       validate={(values) => {
         const errors = {};
         if (!values.password) {
           errors.password = 'Required';
         } else if (values.password.length < 8) {
           errors.password = 'Invalid password address';
         }
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={() => {
         history.push('/Profile');
       }}
     >
       {({ isSubmitting }) => (
         <Form className={st.form}>
            <Field type="email" name="email" />
            <ErrorMessage name="email">{(msg) => <div className={st.error}>{msg}</div>}</ErrorMessage>
            <Field type="password" name="password" />
            <ErrorMessage name="password">{(msg) => <div className={st.error}>{msg}</div>}</ErrorMessage>
            <div className={st.btnBlock}>
              <Button className={st.btn} type="submit" disabled={isSubmitting}>Submit</Button>
              <Button className={st.btn} onClick={onHide}>Close</Button>
            </div>
         </Form>
       )}
     </Formik>
   </div>
  );
}
