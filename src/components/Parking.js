import React, {useState} from 'react'
import {InputNumber, Select} from 'formik-antd'
import {Typography} from 'antd';
import {Col, Row} from "react-bootstrap";
import Error from "./Error";

const {Title, Text} = Typography;
const {Option} = Select;

function Parking(props) {
  const {form: {errors, touched, setFieldValue}} = props;
  const [type, setType] = useState([]);
  const [site, setSite] = useState([]);
  const [reservation, setReservation] = useState([false]);
  return (
    <>
      <Col xs lg="12" className='vert-flex' style={{marginTop: 20}}>
        <Title level={5}>Parking</Title>
        <Text className='note'>This information is specially important to those travelling to your accommodation by
          car.</Text>
        <Text className='field-label'>Is parking available to guests?</Text>
        <Row>
          <Col xs lg="6" className='vert-flex'>
            <Select placeholder={'select option'} name={'parking'} onChange={(value, option) => {
              setType(option.type);
              setSite(option.site)
              if(option.type.length>0) {
                setFieldValue('parkingType',option.type[0].value )
              }
              if(option.site.length>0) {
                setFieldValue('parkingSite',option.site[0].value )
              }
            }}>
              {props.parking.map((option) => (
                <Option key={option.value} value={option.value} type={option.type} site={option.siteOption}>{option.label}</Option>
              ))}
            </Select>
            <Error touched={touched} errors={errors} name={'parking'}/>
          </Col>
          {type && type.length > 0 && <Col xs lg="3" className='vert-flex'>
            <Select defaultValue={type[0].value} options={type} name={'parkingType'}/>
            <Error touched={touched} errors={errors} name={'parkingType'}/>
          </Col>}
          {site && site.length > 0 && <Col xs lg="3" className='vert-flex'>
            <Select defaultValue={site[0].value} options={site} name={'parkingSite'}/>
            <Error touched={touched} errors={errors} name={'parkingSite'}/>
          </Col>
          }
        </Row>
        <Row>
          <Col xs lg="6" className='vert-flex'>
            <Text className='field-label'>Do guests need reserve a parking space?</Text>
            <Select name={'parkingReservation'} onChange={(value, option) => {
              setReservation(value)
            }}>
              {props.reservation.map((option) => (
                <Option key={option.value} value={option.value}>{option.label}</Option>
              ))}
            </Select>
            <Error touched={touched} errors={errors} name={'parkingReservation'}/>
          </Col>
          <Col xs lg="6" className='vert-flex'>
            <Text className='field-label'>Price for parking (per day)</Text>
            <InputNumber style={{width: '100%'}} name='parkingPrice' placeholder={'e.g. Double room'}
                         formatter={value => `$ ${value}`}/>
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
    {label: 'Not-available', value: 'not-available', type: [], siteOption: []}
  ],
  reservation: [
    {label: 'Yes-reservation-needed', value: 'yes',},
    {label: 'No-reservation-needed', value: 'no',}
  ],
}
export default Parking;
