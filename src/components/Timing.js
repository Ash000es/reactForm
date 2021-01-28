import React from 'react'
import {Radio, Select} from 'formik-antd'
import {Typography} from 'antd';
import {Col, Row} from "react-bootstrap";

const {Title, Text} = Typography;
const {Option} = Select;

function Timing(props) {
  const {form: {errors, touched, setFieldValue}} = props;
  const Hours = () => {
    const rows = [];
    for (let i = 0; i < 24; i = i + 1) {
      rows.push(<Option key={`${(i + 1)}`} value={`${(i + 1)}`}>{`${(i + 1).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })}:00`}</Option>)
    }
    return rows;
  }
  const CheckIn = ({name})=>(
      <Row style={{margin: 0}}>
        <Radio.Group
          name={`${name}Default`}
          options={props.checkinOptionsFrom}
          optionType="button"
          onChange={(e)=>{
            if (setFieldValue) {
              setFieldValue(`${name}Other`, '');
              setFieldValue(`${name}`, e.target.value)
            }
          }}
        />
        <Select
          placeholder={'Other'}
          name={`${name}Other`}
          onChange={(value, option) => {
            if (setFieldValue){
              setFieldValue(`${name}Default`,'');
              setFieldValue(`${name}`,value)
            }
          }}>
          {Hours()}
        </Select>
      </Row>
  )
  return (
    <Row style={{marginTop: 20, paddingLeft: 20, paddingRight: 20}}>
      <Col xs lg="6" className='vert-flex'>
        <Title level={5}>Check-in</Title>
        <Text className='field-label'>From:</Text>
        <CheckIn name={'checkinFrom'}/>
        <Text className='field-label'>To:</Text>
        <CheckIn name={'checkinTo'}/>
      </Col>
      <Col xs lg="6" className='vert-flex'>
        <Title level={5}>Check-out</Title>
        <Text className='field-label'>From: (optional)</Text>
        <CheckIn name={'checkoutFrom'}/>
        <Text className='field-label'>To: (optional)</Text>
        <CheckIn name={'checkoutTo'}/>
      </Col>
    </Row>
  )
}

Timing.defaultProps = {
  maxCancellationDays: 30,
  checkinOptionsFrom: [
    {label: '12:00', value: '12'},
    {label: '14:00', value: '14'},
    {label: '16:00', value: '16'},
  ],
  checkinOptionsTo: [
    {label: '12:00', value: '12'},
    {label: '14:00', value: '14'},
    {label: '16:00', value: '16'},
  ],
  checkoutOptionsFrom: [
    {label: '12:00', value: '12'},
    {label: '14:00', value: '14'},
    {label: '16:00', value: '16'},
  ],
  checkoutOptionsTo: [
    {label: '12:00', value: '12'},
    {label: '14:00', value: '14'},
    {label: '16:00', value: '16'},
  ]
}
export default Timing;
