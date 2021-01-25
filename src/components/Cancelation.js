import React, {useState} from 'react'
import {InputNumber, Select} from 'formik-antd'
import {Typography} from 'antd';
import {Col} from "react-bootstrap";
import Error from "./Error";

const {Title, Text} = Typography;
const {Option} = Select;
const Style = {}

function Cancellation(props) {
  const {form: {errors, touched}} = props;
  const [breakfast, setBreakfast] = useState([true]);
  const Days = () => {
    const rows = [];
    for (let i = 0; i < props.maxCancellationDays; i++) {
      rows.push(<Option value={`${(i+1)}`}>{`${(i+1)} Days`}</Option>)
    }
    return rows;
  }
  return (
    <>
      <Col xs lg="6" className='vert-flex' style={{marginTop: 20}}>
        {/* every formik-antd component must have the 'name' prop set: */}
        <Title level={5}>Cancellation</Title>
        <Text className='field-label'>How many days in advance can guests free of charge?</Text>
        <Select name={'cancellationDays'} onChange={(value, option) => {
          setBreakfast(value);
        }}>
          {Days()}
        </Select>
        <Error touched={touched} errors={errors} name={'cancellationDays'}/>

        <Text className='field-label'>Or guests will pay</Text>
        <Select name={'cancellationFee'} onChange={(value, option) => {
          setBreakfast(value);
        }}>
          {props.cancellationFeeOptions.map((option) => (
            <Option value={option.value}>{option.label}</Option>
          ))}
        </Select>
        <Error touched={touched} errors={errors} name={'cancellationFee'}/>
      </Col>

    </>
  )
}

Cancellation.defaultProps = {
  maxCancellationDays: 30,
  cancellationFeeOptions: [
    {label: '100 % of full stay', value: 100},
    {label: '75 % of full stay', value: 75},
    {label: '50 % of full stay', value: 50},
    {label: '25 % of full stay', value: 25},
  ],
}
export default Cancellation;