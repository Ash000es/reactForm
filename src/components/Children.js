import React from 'react'
import {Radio} from 'formik-antd'
import {Typography} from 'antd';
import {Col} from "react-bootstrap";

const {Title, Text} = Typography;
const childOption = [
  {label: 'Yes', value: true},
  {label: 'No', value: false},
]

function Children(props) {
  const {form: {}} = props;
  return (
    <Col xs lg="8" className='vert-flex' style={{marginTop: 20}}>
      <Title level={5}>Children</Title>
      <Text className='field-label'>Can you accommodate children? (You can specify the ages and prices)</Text>
      <Radio.Group
        defaultValue={true}
        name={'accommodateChildren'}
        options={childOption}
      />
    </Col>
  )
}

Children.defaultProps = {}
export default Children;
