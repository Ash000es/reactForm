import React from 'react'
import {Input, Radio} from 'formik-antd'
import {Typography} from 'antd';

import PhoneInputField from "./PhoneInputField";
import {Col, Row} from "react-bootstrap";
import Error from "./Error";

const {Title, Text} = Typography;

const Style = {}

function Contact(props) {
  const { form: { errors, touched }, form} = props;
  return (
    <div className='vert-flex'>
      <Col xs lg="7">
        <Title level={5} style={{marginTop: 50}}>What are the contact details fir this property?</Title>
        <Text className='field-label'>Contact nme</Text>
        <Input name='contactName' placeholder={'Who will receive the letter?'}/>
        <Error touched={touched} errors={errors} name={'contactName'}/>
      </Col>
      <Col lg="12" className='vert-flex'>
        <Text className='field-label' style={{marginTop: 30}}>Contact number ( So we can assist you with your
          registration when needed)</Text>
        <Row>
          <Col lg="5" className='vert-flex'>
            <Text className='field-label'>Phone number</Text>
            <PhoneInputField field={{name: 'phone', value: ''}} form={form}/>
            <Error touched={touched} errors={errors} name={'phone'}/>
          </Col>
          <Col lg="2"/>
          <Col lg="5" className='vert-flex'>
            <Text className='field-label'>Alternative phone number (optional)</Text>
            <PhoneInputField field={{name: 'alternatePhone', value: ''}} form={props.form}/>
            <Error touched={touched} errors={errors} name={'alternatePhone'}/>
          </Col>
        </Row>
      </Col>
      <Col lg="7" className='vert-flex' style={{marginTop: 20}}>
        <Text className='field-label'>
          Do you own multiple hotels, or are you part of property management company or group?
        </Text>
        <Radio.Group name={'multipleHotels'}>
          <Radio value={1}>Yes</Radio>
          <Radio value={2}>No</Radio>
        </Radio.Group>
        <Error touched={touched} errors={errors} name={'multipleHotels'}/>
      </Col>

    </div>
  )
}

Contact.defaultProps = {

}
export default Contact;
