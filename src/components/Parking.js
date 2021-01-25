import React, {useState} from 'react'
import {InputNumber, Select} from 'formik-antd'
import {Typography} from 'antd';
import {Col, Row} from "react-bootstrap";
import Error from "./Error";

const {Title, Text} = Typography;
const {Option} = Select;
const Style = {}

function Parking(props) {
  const {form: {errors, touched}} = props;
  const [type, setType] = useState([]);
  const [site, setSite] = useState([]);
  const [reservation, setReservation] = useState([false]);
  return (
    <>
      <Col xs lg="12" className='vert-flex' style={{marginTop: 20}}>
        {/* every formik-antd component must have the 'name' prop set: */}
        <Title level={5}>Parking</Title>
        <Text className='note'>This information is specially important to those travelling to your accommodation by
          car.</Text>
        <Text className='field-label'>Is parking available to guests?</Text>
        <Row>
          <Col xs lg="6" className='vert-flex'>
            <Select name={'parking'} onChange={(value, option)=>{
              setType(option.type);
              setSite(option.site)
            }}>
              {props.parking.map((option) => (
                <Option value={option.value} type={option.type} site={option.siteOption}>{option.label}</Option>
              ))}
            </Select>
            <Error touched={touched} errors={errors} name={'roomType'}/>
          </Col>
          <Col xs lg="3" className='vert-flex'>
            <Select name={'parking-type'}>
              {type.map((option) => (
                <Option value={option.value}>{option.label}</Option>
              ))}
            </Select>
            <Error touched={touched} errors={errors} name={'roomType'}/>
          </Col>
          <Col xs lg="3" className='vert-flex'>
            <Select name={'parking-site'}>
              {site.map((option) => (
                <Option value={option.value}>{option.label}</Option>
              ))}
            </Select>
            <Error touched={touched} errors={errors} name={'roomType'}/>
          </Col>
        </Row>
        <Row>
          <Col xs lg="6" className='vert-flex'>
            <Text className='field-label'>Do guests need reserve a parking space?</Text>
            <Select name={'parking'} onChange={(value, option)=>{
              setReservation(value)
            }}>
              {props.reservation.map((option) => (
                <Option value={option.value}>{option.label}</Option>
              ))}
            </Select>
            <Error touched={touched} errors={errors} name={'roomName'}/>
          </Col>
          <Col xs lg="6" className='vert-flex'>
            <Text className='field-label'>Price for parking (per day)</Text>
            <InputNumber style={{width: '100%'}} name='parkingPrice' placeholder={'e.g. Double room'}  formatter={value => `$ ${value}`}/>
            <Error touched={touched} errors={errors} name={'parkingPrice'}/>
          </Col>
        </Row>
      </Col>

    </>
  )
}

Parking.defaultProps = {
  parking: [
    {
      label: 'Available', value: 'available',
      type: [
        {label: 'Private', value: 'private',},
        {label: 'Public', value: 'public',}
      ],
      siteOption: [
        {label: 'On-Site', value: 'onsite',},
        {label: 'Off-site', value: 'offsite',}
      ],
    },
    {label: 'Not-available', value: 'not-available', type: []}
  ],
  reservation: [
    {label: 'Yes-reservation-needed', value: 'yes',},
    {label: 'No-reservation-needed', value: 'no',}
  ],
}
export default Parking;
