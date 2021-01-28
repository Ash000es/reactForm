import React, {useState} from 'react'
import {Input, Select} from 'formik-antd'
import {Typography} from 'antd';
import {Col, Row} from "react-bootstrap";
import Error from "./Error";

const {Title, Text} = Typography;
const {Option} = Select;

function RoomDetail(props) {
  const {form: {errors, touched}, index} = props;
  const [roomType, setRoomType] = useState();
  return (
    <>
      <Col xs lg="6" className='vert-flex' style={{marginTop: 40}}>
        {/* every formik-antd component must have the 'name' prop set: */}
        <Title level={4}>Layout and pricing</Title>
        <Text className='field-label'>Room type</Text>
        <Select name={`rooms[${index}].roomType`} onChange={(value => setRoomType(value))}>
          {props.roomType.map((option) => (
            <Option key={option.value} value={option.value}>{option.label}</Option>
          ))}
        </Select>
        <Error touched={touched} errors={errors} name={`rooms[${index}].roomType`}/>
      </Col>
      <Row style={{margin:0}}>
        <Col xs lg="6" className='vert-flex'>
          <Text className='field-label'>Room name</Text>
          <Select name={`rooms[${index}].roomName`}>
            {roomType ? props.roomName.map((option) => (
              <Option key={option.value} value={`${roomType} room ${option.label}`}>{`${roomType} room ${option.label}`}</Option>
            )):null}
          </Select>
          <Error touched={touched} errors={errors} name={`rooms[${index}].roomName`}/>
          <Text className='description'>This is the name guests will see on the Booking.com websites </Text>
        </Col>
        <Col xs lg="6" className='vert-flex'>
          <Text className='field-label'>Room name</Text>
          <Input name={`rooms[${index}].customName`} placeholder={'e.g. Double room'}/>
          <Text className='description'>Create an optional custom name for your reference </Text>
        </Col>
      </Row>
      <Col xs lg="6" className='vert-flex'>
        <Text className='field-label'>Smoking policy</Text>
        <Select name={`rooms[${index}].smokingPolicy`}>
          {props.smokingPolicy.map((option) => (
            <Option key={option.value} value={option.value}>{option.label}</Option>
          ))}
        </Select>
        <Error touched={touched} errors={errors} name={`rooms[${index}].smokingPolicy`}/>
        <Text className='field-label'>No of rooms(of this type)</Text>
        <Input name={`rooms[${index}].noOfRooms`} />
        <Error touched={touched} errors={errors} name={`rooms[${index}].noOfRooms`}/>
      </Col>
    </>
  )
}

RoomDetail.defaultProps = {
  roomType: [
    {label: 'Single', value: 'single'},
    {label: 'Double', value: 'double'}
  ],
  roomName: [
    {label: 'with patio', value: 'patio'},
    {label: 'without patio', value: 'no-patio'}
  ],
  smokingPolicy: [
    {label: 'Smoking', value: 'smoking'},
    {label: 'Non-smoking', value: 'non-smoking'}
  ],
}
export default RoomDetail;
