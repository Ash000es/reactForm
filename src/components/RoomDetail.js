import React from 'react'
import {Input, Select} from 'formik-antd'
import {Typography} from 'antd';
import {Col, Row} from "react-bootstrap";
import Error from "./Error";

const {Title, Text} = Typography;
const {Option} = Select;
const Style = {}

function RoomDetail(props) {
  const {form: {errors, touched}} = props;
  return (
    <>
      <Col xs lg="6" className='vert-flex' style={{marginTop: 40}}>
        {/* every formik-antd component must have the 'name' prop set: */}
        <Title level={4}>Layout and pricing</Title>
        <Text className='field-label'>Room type</Text>
        <Select name={'roomType'}>
          {props.roomType.map((option) => (
            <Option value={option.value}>{option.label}</Option>
          ))}
        </Select>
        <Error touched={touched} errors={errors} name={'roomType'}/>
      </Col>
      <Row style={{margin:0}}>
        <Col xs lg="6" className='vert-flex'>
          <Text className='field-label'>Room name</Text>
          <Input name='roomName' placeholder={'e.g. Double room'}/>
          <Error touched={touched} errors={errors} name={'roomName'}/>
          <Text className='description'>This is the name guests will see on the Booking.com websites </Text>
        </Col>
        <Col xs lg="6" className='vert-flex'>
          <Text className='field-label'>Room name</Text>
          <Input name='roomName' placeholder={'e.g. Double room'}/>
          <Error touched={touched} errors={errors} name={'roomName'}/>
          <Text className='description'>This is the name guests will see on the Booking.com websites </Text>
        </Col>
      </Row>
      <Col xs lg="6" className='vert-flex'>
        <Text className='field-label'>Smoking policy</Text>
        <Select name={'smokingPolicy'}>
          {props.smokingPolicy.map((option) => (
            <Option value={option.value}>{option.label}</Option>
          ))}
        </Select>
        <Error touched={touched} errors={errors} name={'smokingPolicy'}/>
        <Text className='field-label'>No of rooms(of this type)</Text>
        <Input name='noOfRooms'/>
        <Error touched={touched} errors={errors} name={'noOfRooms'}/>
      </Col>
    </>
  )
}

RoomDetail.defaultProps = {
  roomType: [
    {label: 'Single', value: 'single'},
    {label: 'Double', value: 'double'}
  ],
  smokingPolicy: [
    {label: 'Smoking', value: 'smoking'},
    {label: 'Non-smoking', value: 'non-smoking'}
  ],
}
export default RoomDetail;
