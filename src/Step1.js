import React, {useRef, useState} from 'react'
import {Form, SubmitButton} from 'formik-antd'
import {Formik} from 'formik'
import * as Yup from 'yup';
import Address from "./components/Address";
import Contact from "./components/Contact";
import PaymentOptions from "./components/PaymentOptions";
import Overview from "./components/Overview";
import { withRouter } from "react-router";

const Style = {
  formRoot: {
    display: 'flex',
    flexDirection: 'column',
  },
}
const Schema = Yup.object().shape({
  placeName: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required'),
  street: Yup.string().max(50, 'Too Long!').required('Required'),
  line2: Yup.string().max(100, 'Too Long!').required('Required'),
  country: Yup.string().max(100, 'Too Long!').required('Required'),
  city: Yup.string().max(100, 'Too Long!').required('Required'),
  postcode: Yup.string().min(5, 'Too Short!').max(6, 'Too Long!').required('Required'),
  rating: Yup.string().required('Required'),
  contactName: Yup.string().max(100, 'Too Long!').required('Required'),
  phone: Yup.string().min(10, 'Too Short!').max(50, 'Too Long!').required('Required'),
  alternatePhone: Yup.string().min(10, 'Too Short!').max(50, 'Too Long!'),
  multipleHotels: Yup.string().required('Required'),
});
const initials = {
  placeName: '',
  rating: '',
  acceptCard: true
}
function Step1(props) {
  const formRef = useRef();
  return (
    <div className={'container'}>
      <Formik
        onSubmit={(values)=>props.history.push('/step2')}
        innerRef={formRef}
        initialValues={initials}
        validationSchema={Schema}
        render={({ errors, touched }) => (
          <Form>
            <div style={Style.formRoot}>
              <Overview form={formRef && formRef.current ? formRef.current : {}} />
              <Address form={formRef && formRef.current ? formRef.current : {}} />
              <Contact form={formRef && formRef.current ? formRef.current : {}}/>
              <PaymentOptions form={formRef && formRef.current ? formRef.current : {}}/>
              <SubmitButton className='submit-button'>{'Continue'}</SubmitButton>
            </div>
          </Form>
        )}
      />
    </div>
  )
}

Step1.defaultProps = {

}
export default withRouter(Step1);