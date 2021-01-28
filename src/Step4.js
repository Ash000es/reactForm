import React, {useRef} from 'react'
import {Form} from 'formik-antd'
import {Formik} from 'formik'
import {Typography} from 'antd';
import {Col} from "react-bootstrap";
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

function Step4(props) {
  const formRef = useRef();
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
            </div>
          </Form>
        )}
      />
    </div>
  )
}

Step4.defaultProps = {}
export default Step4;
