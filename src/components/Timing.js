import React from 'react'
import {Radio} from 'formik-antd'
import {Typography} from 'antd';
import {Col, Row} from "react-bootstrap";

const {Title, Text} = Typography;
const Style = {}
function Timing(props) {
  const {form: {errors, touched}} = props;
  return (
    <Row style={{marginTop: 20, paddingLeft:20, paddingRight: 20}}>
      <Col xs lg="6" className='vert-flex'>
        {/* every formik-antd component must have the 'name' prop set: */}
        <Title level={5}>Check-in</Title>
        <Text className='field-label'>From:</Text>
        <Radio.Group
          name={'checkinFrom'}
          options={props.checkinOptionsFrom}
          optionType="button"
        />
        <Text className='field-label'>To:</Text>
        <Radio.Group
          name={'checkinTo'}
          options={props.checkinOptionsTo}
          optionType="button"
        />
      </Col>
      <Col xs lg="6" className='vert-flex'>
        <Title level={5}>Check-out</Title>
        <Text className='field-label'>From: (optional)</Text>
        <Radio.Group
          name={'checkoutFrom'}
          options={props.checkoutOptionsFrom}
          optionType="button"
        />
        <Text className='field-label'>To:</Text>
        <Radio.Group
          name={'checkoutTo'}
          options={props.checkoutOptionsTo}
          optionType="button"
        />
      </Col>
    </Row>
  )
}

Timing.defaultProps = {
  maxCancellationDays: 30,
  checkinOptionsFrom : [
    { label: '12:00', value: '12' },
    { label: '14:00', value: '14' },
    { label: '16:00', value: '16' },
    { label: '18:00', value: '18' },
  ],
  checkinOptionsTo : [
    { label: '12:00', value: '12' },
    { label: '14:00', value: '14' },
    { label: '16:00', value: '16' },
    { label: '18:00', value: '18' },
  ],
  checkoutOptionsFrom : [
    { label: '12:00', value: '12' },
    { label: '14:00', value: '14' },
    { label: '16:00', value: '16' },
    { label: '18:00', value: '18' },
  ],
  checkoutOptionsTo : [
    { label: '12:00', value: '12' },
    { label: '14:00', value: '14' },
    { label: '16:00', value: '16' },
    { label: '18:00', value: '18' },
  ]
}
export default Timing;
