import React, {useState} from 'react'
import {InputNumber, Select} from 'formik-antd'
import {Typography} from 'antd';
import {Col} from "react-bootstrap";
import Error from "./Error";

const {Title, Text} = Typography;
const {Option} = Select;

function Breakfast(props) {
  const {form: {errors, touched}} = props;
  const [breakfast, setBreakfast] = useState([true]);
  return (
    <>
      <Col xs lg="6" className='vert-flex' style={{marginTop: 20}}>
        {/* every formik-antd component must have the 'name' prop set: */}
        <Title level={5}>Breakfast</Title>
        <Text className='field-label'>Is breakfast available to guests?</Text>
        <Select
          placeholder={'select option'}
          name={'breakfast'} onChange={(value, option)=>{
          setBreakfast(value);
        }}>
          {props.breakfastOption.map((option) => (
            <Option key={option.value} value={option.value}>{option.label}</Option>
          ))}
        </Select>
        <Error touched={touched} errors={errors} name={'breakfast'}/>
        <Text className='field-label'>Price for breakfast (per day, per person)</Text>
        <InputNumber style={{width: '100%'}} name='breakfastPrice' placeholder={'e.g. Double room'}  formatter={value => `$ ${value}`}/>
        <Error touched={touched} errors={errors} name={'breakfastPrice'}/>
        <Text className='field-label'>What kind of breakfast is available?</Text>
        <Select name={'breakfastTypes'}>
          {props.breakfastTypes.map((option) => (
            <Option key={option.value}  value={option.value}>{option.label}</Option>
          ))}
        </Select>
        <Error touched={touched} errors={errors} name={'breakfastTypes'}/>
      </Col>

    </>
  )
}

Breakfast.defaultProps = {
  breakfastOption: [
    {label: 'Yes-mandatory', value: 'mandatory',},
    {label: 'Yes-optional', value: 'optional',}
  ],
  breakfastTypes: [
    {label: 'egg-butter', value: 'butter',},
    {label: 'Traditional', value: 'traditional',}
  ],
}
export default Breakfast;
