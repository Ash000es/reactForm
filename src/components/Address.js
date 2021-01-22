import React from 'react'
import {Input, Select} from 'formik-antd'
import {Typography} from 'antd';
import {Col} from "react-bootstrap";
import countries from './countries'
import Error from "./Error";

const {Title, Text} = Typography;
const {Option} = Select;
const Style = {
}

function Address(props) {
  const { form: { errors, touched }} = props;
  return (
    <Col xs lg="6" className='vert-flex' style={{marginTop: 40}}>
      {/* every formik-antd component must have the 'name' prop set: */}
      <Title level={4}>Where is your property located?</Title>
      <Text>Street address</Text>
      <Input name='street' placeholder={'e.g. 123 Easy street'}/>
      <Error touched={touched} errors={errors} name={'street'}/>
      <Text className='field-label'>Address line 2</Text>
      <Input name='line2' placeholder={'e.g. 123 Easy street'}/>
      <Error errors={errors} touched={touched} name={'line2'}/>
      <Text className='field-label'>Country/region</Text>
      {/* the rest of the api stays as is */}
      <Select name={'country'}>
        {countries.map((option) => (
          <Option value={option.code}>{option.name}</Option>
        ))}
      </Select>
      <Error errors={errors} touched={touched} name={'country'}/>
      <Text className='field-label'>City</Text>
      <Input name='city' placeholder={'e.g. Buiksloot'}/>
      <Error errors={errors} touched={touched} name={'city'}/>
      <Text className='field-label'>Post Code</Text>
      <Input name='postcode' placeholder={'e.g. Buiksloot'}/>
      <Error errors={errors} touched={touched} name={'postcode'}/>
    </Col>
  )
}

Address.defaultProps = {

}
export default Address;
