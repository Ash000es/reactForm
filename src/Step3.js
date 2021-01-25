import React, {useRef, useState} from 'react'
import {AddRowButton, Form, Select, SubmitButton} from 'formik-antd'
import {Formik} from 'formik'
import {Typography} from 'antd';
import {Col, Row} from "react-bootstrap";
import RoomDetail from "./components/RoomDetail";
import BedOptions from "./components/BedOptions";
import Parking from "./components/Parking";
import Breakfast from "./components/Breakfast";
import Amenities from "./components/Ammenties";

const {Title, Text} = Typography;
const {Option} = Select;
const Style = {
  formRoot: {
    display: 'flex',
    flexDirection: 'column',
  },
  colLeft: {
    display: 'flex',
    flexDirection: 'column'
  },
  fieldLabel: {
    marginTop: 10
  }
}

function Step3(props) {
  const [form, setForm] = useState({});
  const [roomCount, setRoomCount] = useState({});
  const formRef = useRef();
  const Room = () => {
    return (
      <>
        <RoomDetail form={formRef && formRef.current ? formRef.current : {}}/>
        <BedOptions form={formRef && formRef.current ? formRef.current : {}}/>
      </>
    )
  }
  return (
    <div className={'container'}>
      <Formik
        innerRef={formRef}
        initialValues={{firstName: '', age: 20, newsletter: false}}
        render={() => (
          <Form>
            <div style={Style.formRoot}>
              <Col xs lg="12" className='vert-flex' style={{marginTop: 40}}>
                {/* every formik-antd component must have the 'name' prop set: */}
                <Title level={4}>Facility & Services</Title>
                <Text className='description'>Now, tell us some general detail about your property, such as facilities available, internet,
                  parking and  languages you speak.</Text>
              </Col>
              <Parking form={formRef && formRef.current ? formRef.current : {}}/>
              <Breakfast form={formRef && formRef.current ? formRef.current : {}}/>
              <Amenities form={formRef && formRef.current ? formRef.current : {}}/>
            </div>
          </Form>
        )}
      />
    </div>
  )
}

Step3.defaultProps = {}
export default Step3;
