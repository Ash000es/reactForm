import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types';
import {Form, SubmitButton} from 'formik-antd'
import {Formik} from 'formik'
import * as Yup from 'yup';
import Address from "./components/Address";
import Contact from "./components/Contact";
import PaymentOptions from "./components/PaymentOptions";
import Overview from "./components/Overview";
import ChannelManager from "./components/ChannelManager";

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
  channelManager: Yup.string().required('Required')
});
const initials = {
  placeName: '',
  rating: '',
  acceptCard: true,
  channelManager: false,
  multipleHotels: false
}
function Step1(props) {
  const formRef = useRef();
  return (
    <div className={'container'}>
      <Formik
        onSubmit={(values) => props.onNext(values)}
        innerRef={formRef}
        initialValues={initials}
        validationSchema={Schema}
        render={({ errors, touched }) => (
          <Form>
            <div style={Style.formRoot}>
              <Overview form={formRef && formRef.current ? formRef.current : {}} />
              <Address form={formRef && formRef.current ? formRef.current : {}} />
              <ChannelManager form={formRef && formRef.current ? formRef.current : {}}/>
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
Step1.prototype = {
  onNext: PropTypes.func
}
export default Step1;