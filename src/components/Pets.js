import React, {useState} from 'react'
import {InputNumber, Select} from 'formik-antd'
import {Typography} from 'antd';
import {Col, Row} from "react-bootstrap";
import Error from "./Error";

const {Title, Text} = Typography;
const {Option} = Select;
const Style = {}

function Pets(props) {
  const {form: {errors, touched}} = props;
  const [charges, setCharges] = useState([]);
  return (
    <>
      <Col xs lg="10" className='vert-flex' style={{marginTop: 20}}>
        {/* every formik-antd component must have the 'name' prop set: */}
        <Title level={5}>Pets</Title>
        <Text className='note'>Some guests like to travel with their furry friends. Indicate if you allow pets and if any charges apply</Text>
        <Row style={{marginTop: 20}}>
          <Col xs lg="6" className='vert-flex'>
            <Select name={'pets'} onChange={(value, option)=>{
              setCharges(option.charges);
            }}>
              {props.pets.map((option) => (
                <Option value={option.value} type={option.type} charges={option.charges}>{option.label}</Option>
              ))}
            </Select>
            <Error touched={touched} errors={errors} name={'pets'}/>
          </Col>
          <Col xs lg="3" className='vert-flex'>
            <Select name={'pets-charges'}>
              {charges.map((option) => (
                <Option value={option.value}>{option.label}</Option>
              ))}
            </Select>
            <Error touched={touched} errors={errors} name={'pets-charge'}/>
          </Col>
        </Row>
      </Col>

    </>
  )
}

Pets.defaultProps = {
  pets: [
    {
      label: 'Yes', value: 'yes',
      charges: [
        {label: 'Charges may apply', value: 'paid',},
        {label: 'Free', value: 'free',}
      ]
    },
    {label: 'No', value: 'no', charges: []}
  ]
}
export default Pets;
