import React, {useState} from 'react'
import {Radio, Select, Checkbox} from 'formik-antd'
import {Typography} from 'antd';
import {Col} from "react-bootstrap";

const {Text, Title} = Typography;
const {Option} = Select;

function ExtraBed(props) {
  const [extraBeds, setExtraBeds] = useState(false);
  const {form: {setFieldValue}} = props;
  const Beds = () => {
    const rows = [];
    for (let i = 0; i < 5; i++) {
      rows.push(<Option key={`${(i + 1)}`} value={`${(i + 1)}`}>{`${(i + 1)}`}</Option>)
    }
    return rows;
  }
  return (
    <>
      <Col lg="7" className='vert-flex'>
        <Title level={5} style={{marginTop: 20}}>Extra bed options</Title>
        <Text>
          Can you provide extra beds?
        </Text>
        <Radio.Group
          onChange={(e) => {
            setExtraBeds(e.target.value)
            setFieldValue('extraBedCount','1')
          }}
          name={'extraBedsAvailable'}
          defaultValue={false}>
          <Radio value={true}>Yes</Radio>
          <Radio value={false}>No</Radio>
        </Radio.Group>
        {extraBeds && <Text className={'field-label'}>
          Select the number of extra beds that can be added?
        </Text>}
      </Col>
      {extraBeds && <> <Col lg="2" className='vert-flex'>
        <Select
          defaultValue={'1'}
          name={`extraBedCount`}>
          {Beds()}
        </Select>
      </Col>
        <Col lg="8" className='vert-flex'>
          <Text className={'field-label'}>
            Tick the box if you can accommodate following guest in extra beds.
          </Text>
          <Checkbox.Group
            className='vert-flex'
            name={'extraGuestOptions'}
            options={props.extraGuestOptions}
          />
        </Col>
      </>
      }
    </>
  )
}

ExtraBed.defaultProps = {
  extraGuestOptions: [
    {label: 'Children upto 2 years in cots', value: 'kids'},
    {label: 'Children', value: 'children'},
    {label: 'Adults', value: 'adults'},
  ]
}
export default ExtraBed;
