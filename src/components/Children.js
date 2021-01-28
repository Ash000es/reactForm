import React from 'react'
import {Radio} from 'formik-antd'
import {Typography} from 'antd';
import {Col} from "react-bootstrap";

const {Title, Text} = Typography;
const childOption= [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: '14' },
]
function Children(props) {
  const {form: {}} = props;
  return (
      <Col xs lg="6" className='vert-flex' style={{marginTop: 20}}>
        {/* every formik-antd component must have the 'name' prop set: */}
        <Title level={5}>Children</Title>
        <Text className='field-label'>Can you accommodate children?</Text>
        <Radio.Group
          name={'checkinFrom'}
          options={childOption}
        />
      </Col>
  )
}

Children.defaultProps = {
}
export default Children;
