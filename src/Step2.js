import React, {useState, useRef} from 'react'
import {Form, Input, Select, SubmitButton, AddRowButton} from 'formik-antd'
import {Formik} from 'formik'
import {Typography} from 'antd';
import {Col, Row} from "react-bootstrap";
import Address from "./components/Address";
import Contact from "./components/Contact";
import PaymentOptions from "./components/PaymentOptions";
import RoomDetail from "./components/RoomDetail";
import Overview from "./components/Overview";
import BedOptions from "./components/BedOptions";

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

function Step2(props) {
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
              <Room/>
              <Row style={{justifyContent: 'flex-end', display: 'flex'}}>
                <Col lg={3}><AddRowButton className={'add-row-button'} createNewRow={() => {
                }}>Add another room</AddRowButton></Col>
                <Col lg={4}><SubmitButton className='submit-button'>{'Continue'}</SubmitButton></Col>
              </Row>
            </div>
          </Form>
        )}
      />
    </div>
  )
}

Step2.defaultProps = {}
export default Step2;
