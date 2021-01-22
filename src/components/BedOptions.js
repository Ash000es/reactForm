import React from 'react'
import {Input, Select, DatePicker} from 'formik-antd'
import {Typography} from 'antd';
import {Col, Row} from "react-bootstrap";
import Error from "./Error";

const {Title, Text} = Typography;
const {Option} = Select;
const { RangePicker } = DatePicker;
const Style = {}

function BedOptions(props) {
  const {form: {errors, touched}} = props;
  const Bed = ()=>(
    <Row>
      <Col xs lg="8" className='vert-flex'>
        <Select name={'bedOption'}>
          {props.bedOption.map((option) => (
            <Option value={option.value}>{option.label}</Option>
          ))}
        </Select>
        <Error touched={touched} errors={errors} name={'bedOption'}/>
      </Col>
      <Col xs lg="1" className='vert-flex'>
        <Text>*</Text>
      </Col>
      <Col xs lg="3" className='vert-flex'>
        <Select name={'bedCountOptions'}>
          {props.bedCountOptions.map((option) => (
            <Option value={option.value}>{option.label}</Option>
          ))}
        </Select>
        <Error touched={touched} errors={errors} name={'bedCountOptions'}/>
      </Col>
    </Row>
  )
  return (
    <>
      <Col xs lg="8" className='vert-flex' style={{marginTop: 40}}>
        {/* every formik-antd component must have the 'name' prop set: */}
        <Title level={4}>Bed Options</Title>
        <Text className='note'>Tell us only about the existing beds in the room. Do not include extra beds.</Text>
        <Text className='field-label'>What kind of beds are available in this room?</Text>
        <Bed/>
        <Text className='field-label'>How many guests can stay in this room?</Text>
      </Col>
      <Col xs lg="3" className='vert-flex'>
        {/* every formik-antd component must have the 'name' prop set: */}
        <Input name='roomGuestCount' placeholder={'e.g. 1'}/>
      </Col>
      <Col xs lg="6" className='vert-flex' style={{marginTop: 30}}>
        <Title level={5} className='note' >Choose your dates and Upload your rates.</Title>
        <RangePicker name={'room-dates'} />
        <Text className='field-label'>Room price per night</Text>
        <Input name='room-price' />
        <Text className='field-label'>Number of available rooms</Text>
        <Input name='available-rooms-count' />
      </Col>
    </>
  )
}

BedOptions.defaultProps = {
  bedOption: [
    {label: 'Single bed / 65-50 cm wide', value: 'single'},
    {label: 'Double bed / 130-50 cm wide', value: 'double'}
  ],
  bedCountOptions: [{label: '1', value: '1'},{label: '2', value: '2'},{label: '3', value: '3'},{label: '4', value: '4'}],
}
export default BedOptions;
