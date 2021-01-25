import React, {useState} from 'react'
import {InputNumber, Select} from 'formik-antd'
import {Typography} from 'antd';
import {Col} from "react-bootstrap";
import Error from "./Error";

const {Title, Text} = Typography;
const {Option} = Select;
const Style = {}

function Breakfast(props) {
  const {form: {errors, touched}} = props;
  const [type, setType] = useState([]);
  const [site, setSite] = useState([]);
  const [breakfast, setBreakfast] = useState([true]);
  return (
    <>
      <Col xs lg="6" className='vert-flex' style={{marginTop: 20}}>
        {/* every formik-antd component must have the 'name' prop set: */}
        <Title level={5}>Breakfast</Title>
        <Text className='field-label'>Is breakfast available to guests?</Text>
        <Select name={'breakfast'} onChange={(value, option)=>{
          setBreakfast(value);
        }}>
          {props.breakfastOption.map((option) => (
            <Option value={option.value}>{option.label}</Option>
          ))}
        </Select>
        <Error touched={touched} errors={errors} name={'roomType'}/>
        <Text className='field-label'>Price for breakfast (per day, per person)</Text>
        <InputNumber style={{width: '100%'}} name='parkingPrice' placeholder={'e.g. Double room'}  formatter={value => `$ ${value}`}/>
        <Error touched={touched} errors={errors} name={'parkingPrice'}/>
      </Col>

    </>
  )
}

Breakfast.defaultProps = {
  breakfastOption: [
    {label: 'Yes-mandatory', value: 'mandatory',},
    {label: 'Yes-optional', value: 'optional',}
  ],
}
export default Breakfast;
