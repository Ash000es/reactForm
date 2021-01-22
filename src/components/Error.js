import React from 'react'
import {Input, Radio, Checkbox} from 'formik-antd'
import {Typography} from 'antd';

import PhoneInputField from "./PhoneInputField";
import {Col, Row} from "react-bootstrap";
import PaymentIcon from './payment/PaymentIcon';
import PropTypes from "prop-types";

const {Title, Text} = Typography;

const Style = {}

function Error(props) {
  const errors = props.errors;
  const touched = props.touched;
  console.log(' Error ', errors)
  if (errors && errors[props.name] && touched && touched[props.name])
    return (
      <Text className={'error-label'}>{errors[props.name]}</Text>
    )
  return null;
}

Error.defaultProps = {
  errors:{},
  name:''
}
Error.propTypes = {
  errors: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
}
export default Error;
