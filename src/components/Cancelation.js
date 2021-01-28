import React from 'react'
import {Select} from 'formik-antd'
import {Typography} from 'antd';
import {Col} from "react-bootstrap";
import Error from "./Error";

const {Title, Text} = Typography;
const {Option} = Select;

function Cancellation(props) {
  const {form: {errors, touched, values}} = props;
  const Days = () => {
    const rows = [];
    for (let i = 0; i < props.maxCancellationDays; i++) {
      rows.push(<Option key={`${(i + 1)}`} value={`${(i + 1)}`}>{`${(i + 1)} Days`}</Option>)
    }
    return rows;
  }
  return (
    <>
      <Col xs lg="6" className='vert-flex' style={{marginTop: 20}}>
        {/* every formik-antd component must have the 'name' prop set: */}
        <Title level={5}>Cancellation</Title>
        <Text className='field-label'>How many days in advance can guests free of charge?</Text>
        <Select value={'15'} name={'cancellationDays'} onChange={(value, option) => {
        }}>
          {Days()}
        </Select>
        <Error touched={touched} errors={errors} name={'cancellationDays'}/>

        <Text className='field-label'>Or guests will pay</Text>
        <Select
          placeholder={'Select option'}
          name={'cancellationFee'}
          onChange={(value, option) => {}}>
          {props.cancellationFeeOptions.map((option) => (
            <Option key={option.value} value={option.value}>{option.label}</Option>
          ))}
        </Select>
        <Error touched={touched} errors={errors} name={'cancellationFee'}/>
      </Col>
      {values && values['cancellationDays'] && <Col xs lg="12" className='vert-flex' style={{marginTop: 20}}>
        <Text
          className='note cancel-policy-description'>{`The guest must cancel ${values['cancellationDays']} days in advance
          or pay ${values['cancellationFee'] ? values['cancellationFee'] : '100'}% of the price of full stay.\n
          `}
          <Text style={{fontWeight: 'normal'}}>{`Note: you can your policies later this is just let you start.`}</Text>
        </Text>
      </Col>
      }
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
