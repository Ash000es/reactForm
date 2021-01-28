import React, {useRef, useState} from 'react'
import {Form, SubmitButton} from 'formik-antd'
import {FieldArray, Formik} from 'formik'
import {Button, Typography} from 'antd';
import {Col, Row} from "react-bootstrap";
import * as Yup from 'yup';
import RoomDetail from "./components/RoomDetail";
import BedOptions from "./components/BedOptions";

const {Title, Text} = Typography;
const Style = {
  formRoot: {
    display: 'flex',
    flexDirection: 'column',
  },
}
const Schema = Yup.object().shape({
  rooms: Yup.array().of(
    Yup.object().shape({
      roomType: Yup.string().required('Required'),
      roomName: Yup.string().required('Required'),
      roomGuestCount: Yup.number().required('Required'),
      roomPrice: Yup.number().required('Required'),
      smokingPolicy: Yup.string().required('Required'),
      availableRoomsCount: Yup.number().required('Required'),
      noOfRooms: Yup.number().required('Required'),
      beds: Yup.array().of(
        Yup.object().shape({
          bedType: Yup.string().required('Required'),
          bedCount: Yup.number().required('Required'),
        })
      ).min(1, 'required').required('required'),
    }))
})
const initials = {
  rooms: [{}]
}

function Step2(props) {
  const [roomCount, setRoomCount] = useState(1)
  const [selectedRoom, setSelectedRoom] = useState(0)
  const formRef = useRef();
  const Room = ({room, index, helper}) => {
    if (index === selectedRoom)
      return (
        <>
          <RoomDetail index={index} form={formRef && formRef.current ? formRef.current : {}}/>
          <BedOptions index={index} form={formRef && formRef.current ? formRef.current : {}}/>
        </>
      )
    else
      return (
        <Row className={'closed-room-box'}>
          <Col lg={5}>
            <Title level={5}>{room.roomName ? room.roomName.toUpperCase() : ''}</Title>
          </Col>
          <Col lg={4}>
            <Text>{room.noOfRooms ? `Number of this type: ${room.noOfRooms}` : ''}</Text>
          </Col>
          <Col lg={3} style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Row>
              <Button style={{color: '#23689b'}} type={'text'} onClick={() => {
                setSelectedRoom(index);
              }}>{'Edit'}</Button>
              <Button
                onClick={() => {
                  if (selectedRoom >= index && selectedRoom !== 0)
                    setSelectedRoom(selectedRoom - 1);
                  setRoomCount(roomCount - 1)
                  helper.remove(index)
                }}
                style={{color: '#23689b', marginLeft: 5}}
                type={'text'}>{'Delete'}</Button>
            </Row>
          </Col>
        </Row>
      )
  }
  return (
    <div className={'container'}>
      <Formik
        onSubmit={(values) => {
          props.onNext(values)
        }}
        innerRef={formRef}
        initialValues={initials}
        validationSchema={Schema}
        render={({values, isValid}) => {
          return (
            <Form>
              <div style={Style.formRoot}>
                <FieldArray
                  name={'rooms'}
                  render={arrayHelpers => (
                    <div>
                      {values && values.rooms && values.rooms.length > 0 ? (
                          values.rooms.map((room, index) => (
                            <Room key={`rooms[${index}]`} name={`rooms[${index}]`} room={room} index={index}
                                  helper={arrayHelpers}/>))) :
                        <Room name={`rooms[0]`} index={0} helper={arrayHelpers}/>
                      }
                      <Row className={'submit-row'} >
                        <Button className={'back-button'} onClick={props.onBack}>{'Go Back'}</Button>
                        <Button
                          disabled={!isValid}
                          className={'add-row-button'}
                          onClick={() => {
                            arrayHelpers.push({})
                            setSelectedRoom(roomCount);
                            setRoomCount(roomCount + 1)

                          }}>Add another room</Button>
                        <SubmitButton className='submit-button'>{'Continue'}</SubmitButton>
                      </Row>
                    </div>
                  )}
                />
              </div>
            </Form>
          )
        }}
      />
    </div>
  )
}

Step2.defaultProps = {}
export default Step2;
