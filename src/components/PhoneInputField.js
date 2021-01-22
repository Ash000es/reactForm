import React, { useState } from 'react';
import PhoneInput,{getCountries} from 'react-phone-number-input';
import PropTypes from 'prop-types';
import { getIn } from 'formik';

const Style = {
  inputContainer:{
    border:'solid 1px #e8eae6',
    padding:5
  }
}
const PhoneInputField = (props) => {
  const {
    field: { name, value },
    form: {
      errors, handleBlur, setFieldValue, touched,
    },
    label,
    country,
    onChange,
    disabled,
  } = props;

  const [isFocused, setFocused] = useState(false);
  const isError = getIn(touched, name) && getIn(errors, name);
  const errorStyle = isError ? 'error' : '';
  const filledStyle = (isFocused || value) ? 'filled' : '';
  const disabledStyle = disabled ? 'disabled' : '';

  const handleInputBlur = (e) => {
    setFocused(false);
    handleBlur(e);
  };

  const handleInputFocus = () => setFocused(true);

  const onValueChange = (phoneNumber) => {
    setFieldValue(name, phoneNumber);

    if (onChange !== null) {
      onChange(phoneNumber);
    }
  };

  return (
    <div style={Style.inputContainer}>
      <PhoneInput

        placeholder="Enter phone number"
        name={name}
        value={value}
        onChange={onValueChange}
        country={country}
      />
      <label className="transition ml-10" htmlFor={name}>
        {label}
      </label>
      <div className="flex h-5 items-end text-red-100 text-xs">
        {isError && getIn(errors, name)}
      </div>
    </div>
  );
};

PhoneInputField.propTypes = {
  className: PropTypes.string,
  form: PropTypes.any.isRequired,
  field: PropTypes.any.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
  country: PropTypes.string,
  disabled: PropTypes.bool,
};

PhoneInputField.defaultProps = {
  className: '',
  label: '',
  onChange: null,
  country: 'AU',
  disabled: false,
};

export default PhoneInputField;