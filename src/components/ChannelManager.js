import React from 'react'
import {Radio} from 'formik-antd'
import {Typography} from 'antd';
import {Col} from "react-bootstrap";

const {Text} = Typography;

function ChannelManager(props) {
  const {form: {}} = props;
  return (
    <Col lg="7" className='vert-flex'>
      <Text className='field-label' style={{marginTop: 30}}>
        Do you use a channel manager?
      </Text>
      <Radio.Group name={'channelManager'} defaultValue={false}>
        <Radio value={true}>Yes</Radio>
        <Radio value={false}>No</Radio>
      </Radio.Group>
    </Col>
  )
}

ChannelManager.defaultProps = {}
export default ChannelManager;
