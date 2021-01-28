import React from 'react'
import {Typography} from 'antd';
import PropTypes from "prop-types";

const {Text} = Typography;

function Error(props) {
  const errors = props.errors;
  const touched = props.touched;
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
