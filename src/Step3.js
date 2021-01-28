import React, {useRef} from 'react'
import {Form, SubmitButton} from 'formik-antd'
import {Formik} from 'formik'
import {Typography} from 'antd';
import {Col} from "react-bootstrap";
import * as Yup from 'yup';
import Parking from "./components/Parking";
import Breakfast from "./components/Breakfast";
import Amenities from "./components/Ammenties";
import Languages from "./components/Languages";

const {Title, Text} = Typography;
const Style = {
  formRoot: {
    display: 'flex',
    flexDirection: 'column',
  }
}
const Schema = Yup.object().shape({
  parking: Yup.string().required('Required'),
  parkingReservation: Yup.string().required('Required'),
  parkingPrice: Yup.number().required('Required'),
  breakfast: Yup.string().required('Required'),
  breakfastTypes: Yup.string().required('Required'),
  breakfastPrice: Yup.string().required('Required'),
  languages: Yup.array().of(
    Yup.object().shape({
      code: Yup.string().required('Required')
    })
  ).min(1, 'required').required('required'),
})
const initials = {
  languages:[]
}
function Step3(props) {
  const formRef = useRef();
  return (
    <div className={'container'}>
      <Formik
        onSubmit={(values)=>{props.onNext(values)}}
        innerRef={formRef}
        initialValues={initials}
        validationSchema={Schema}
        render={() => (
          <Form>
            <div style={Style.formRoot}>
              <Col xs lg="12" className='vert-flex' style={{marginTop: 40}}>
                {/* every formik-antd component must have the 'name' prop set: */}
                <Title level={4}>Facility & Services</Title>
                <Text className='description'>Now, tell us some general detail about your property, such as facilities
                  available, internet, parking and languages you speak.</Text>
              </Col>
              <Parking form={formRef && formRef.current ? formRef.current : {}}/>
              <Breakfast form={formRef && formRef.current ? formRef.current : {}}/>
              <Languages form={formRef && formRef.current ? formRef.current : {}}/>
              <Amenities form={formRef && formRef.current ? formRef.current : {}}/>
              <SubmitButton className='submit-button'>{'Continue'}</SubmitButton>
            </div>
          </Form>
        )}
      />
    </div>
  )
}

Step3.defaultProps = {}
export default Step3;
