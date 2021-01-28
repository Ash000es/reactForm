import React, {useRef} from 'react'
import {Form, SubmitButton} from 'formik-antd'
import {Formik} from 'formik'
import {Button, Typography} from 'antd';
import {Col, Row} from "react-bootstrap";
import * as Yup from 'yup';
import Gallery from "./components/Gallery";
import Cancellation from "./components/Cancelation";
import Timing from "./components/Timing";
import Children from "./components/Children";
import Pets from "./components/Pets";

const {Title, Text} = Typography;
const Style = {
  formRoot: {
    display: 'flex',
    flexDirection: 'column',
  }
}
const Schema = Yup.object().shape({
  cancellationDays: Yup.string().required('Required'),
  checkinFrom: Yup.string().required('Required'),
  checkinTo: Yup.string().required('Required'),
  accommodateChildren: Yup.string().required('Required'),
  pets: Yup.string().required('Required'),
  images: Yup.array().of(
    Yup.object().shape({
      img: Yup.string().required('Required')
    })
  ).min(1, 'required').required('required'),
})
const initials = {
  cancellationDays: 10
}

function Step4(props) {
  const formRef = useRef();
  return (
    <div className={'container'}>
      <Formik
        onSubmit={(values) => props.onNext(values)}
        validateOnMount={true}
        innerRef={formRef}
        initialValues={initials}
        validationSchema={Schema}
        render={() => (
          <Form>
            <div style={Style.formRoot}>
              <Col xs lg="12" className='vert-flex' style={{marginTop: 40}}>
                {/* every formik-antd component must have the 'name' prop set: */}
                <Title level={4}>Property photos</Title>
                <Text className='description'>Great photos invite guests to get the full experience of your property,
                  so upload some high-resolution photos that represent you property. We will display these photos on
                  your
                  property's page on the Booking.com website.</Text>
              </Col>
              <Gallery form={formRef && formRef.current ? formRef.current : {}}/>
              <Cancellation form={formRef && formRef.current ? formRef.current : {}}/>
              <Timing form={formRef && formRef.current ? formRef.current : {}}/>
              <Children form={formRef && formRef.current ? formRef.current : {}}/>
              <Pets form={formRef && formRef.current ? formRef.current : {}}/>
              <Row className={'submit-row'} style={{marginTop: 40}}>
                <Button className={'back-button'} onClick={props.onBack}>{'Go Back'}</Button>
                <SubmitButton className='submit-button'>{'Continue'}</SubmitButton>
              </Row>
            </div>
          </Form>
        )}
      />
    </div>
  )
}

Step4.defaultProps = {}
export default Step4;
