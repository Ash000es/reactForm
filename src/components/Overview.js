import React from 'react'
import {Input, Select} from 'formik-antd'
import {Typography} from 'antd';
import {Col, Row} from "react-bootstrap";
import Error from "./Error";

const {Title, Text} = Typography;
const {Option} = Select;

const Style = {}

function Overview(props) {
  const {
    form: {
      errors, touched,
    }
  } = props;
  return (
    <div className='vert-flex'>
      <Col lg={8}>
        <Title level={4}>What's the name your property?</Title>
        <Input name='placeName'/>
        <Error errors={errors} touched={touched} name={'placeName'}/>
        <Text style={{color: 'lightGrey'}}>This name will be seen by guests when tey will search for a place to
          stay.</Text>

        {/* the rest of the api stays as is */}
        <Title level={5}>Star rating?</Title>
        <Select name={'rating'} style={{width: 120}}>
          {props.ratingOptions.map((option) => (
            <Option value={option.value}>{option.label}</Option>
          ))}
        </Select>
        <Error errors={errors} touched={touched} name={'rating'}/>
      </Col>
    </div>
  )
}

Overview.defaultProps = {
  ratingOptions: [{label: '1', value: '1'},{label: '2', value: '2'},{label: '3', value: '3'},{label: '4', value: '4'}],
}
export default Overview;
