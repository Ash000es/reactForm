import React from 'react'
import {DatePicker, Input, InputNumber, Select} from 'formik-antd';
import {PlusCircleOutlined} from '@ant-design/icons';
import {Button, Typography} from 'antd';
import {Col, Row} from "react-bootstrap";
import Error from "./Error";
import {FieldArray} from "formik";

const {Title, Text} = Typography;
const {Option} = Select;
const { RangePicker } = DatePicker;

function BedOptions(props) {
  const {form: {errors, touched, values}, index} = props;
  const Bed = ({bed,_index})=>(
    <Row style={{marginBottom: 10}}>
      <Col xs lg="8" className='vert-flex'>
        <Select name={`rooms[${index}].beds[${_index}].bedType`}>
          {props.bedOption.map((option) => (
            <Option key={option.value} value={option.value}>{option.label}</Option>
          ))}
        </Select>
        <Error touched={touched} errors={errors} name={`rooms[${index}].beds[${_index}].bedType`}/>
      </Col>
      <Col xs lg="1" className='vert-flex'>
        <Text>*</Text>
      </Col>
      <Col xs lg="3" className='vert-flex'>
        <Select name={`rooms[${index}].beds[${_index}].bedCount`}>
          {props.bedCountOptions.map((option) => (
            <Option key={option.value} value={option.value}>{option.label}</Option>
          ))}
        </Select>
        <Error touched={touched} errors={errors} name={`rooms[${index}].beds[${_index}].bedCount`}/>
      </Col>
    </Row>
  )
  return (
    <>
      <Col xs lg="8" className='vert-flex' style={{marginTop: 40}}>
        {/* every formik-antd component must have the 'name' prop set: */}
        <Title level={4}>Bed Options</Title>
        <Text className='note'>Tell us only about the existing beds in the room. Do not include extra beds.</Text>
        <Text className='field-label'>What kind of beds are available in this room?</Text>
        <FieldArray name={`rooms[${index}].beds`}
          render={arrayHelpers => (
            <div>
            {values && values.beds && values.beds.length > 0 ? (
                values.beds.map((bed, index) => (<Bed name={`bed.${index}`} bed={bed} _index={index}/>))) :<Bed _index={0}/>
            }
              <Button name={'addBed'} type="text" icon={<PlusCircleOutlined />} onClick={()=>arrayHelpers.push({})}>
                add another bed
              </Button>
            </div>
          )}
        />

        <Text className='field-label'>How many guests can stay in this room?</Text>
      </Col>
      <Col xs lg="3" className='vert-flex'>
        {/* every formik-antd component must have the 'name' prop set: */}
        <Input name={`rooms[${index}].roomGuestCount`} placeholder={'e.g. 1'}/>
      </Col>
      <Col xs lg="6" className='vert-flex' style={{marginTop: 30}}>
        <Title level={5} className='note' >Choose your dates and Upload your rates.</Title>
        <RangePicker name={`rooms[${index}].roomDates`} />
        <Text className='field-label'>Room price per night</Text>
        <InputNumber style={{width: '100%'}} name={`rooms[${index}].roomPrice`}  formatter={value => `$ ${value}`}/>
        <Text className='field-label'>Number of available rooms</Text>
        <Input name={`rooms[${index}].availableRoomsCount`} />
      </Col>
    </>
  )
}

BedOptions.defaultProps = {
  bedOption: [
    {label: 'Single bed / 65-50 cm wide', value: 'single'},
    {label: 'Double bed / 130-50 cm wide', value: 'double'}
  ],
  bedCountOptions: [{label: '1', value: '1'},{label: '2', value: '2'},{label: '3', value: '3'},{label: '4', value: '4'}],
}
export default BedOptions;
