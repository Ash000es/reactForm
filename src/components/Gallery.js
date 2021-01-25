import React, {useCallback, useState} from 'react'
import {Select} from 'formik-antd'
import {Button, Typography} from 'antd';
import {Col} from "react-bootstrap";
import {useDropzone} from 'react-dropzone'
import {UploadOutlined} from '@ant-design/icons';

const {Title, Text} = Typography;
const {Option} = Select;
const Style = {}

function Gallery(props) {
  const {form: {errors, touched}} = props;
  const onDrop = useCallback(acceptedFiles => {
  })
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <>
      <Col xs lg="12" className='vert-flex' style={{marginTop: 20}}>
        {/* every formik-antd component must have the 'name' prop set: */}
        <Title level={5}>Photo gallery</Title>
        <Text className='note note-description'>Great, thanks! You can now continue signup. To increase your chances of
          getting more bookings,
          make sure to add additional photos later on - once you're up and running.</Text>
        <div {...getRootProps()} >
          <input {...getInputProps()} />
          <div className="space-align-container">
            <div className="space-align-block">
              {
                isDragActive ?
                  <Title level={5}>Drop the file here ...</Title> :
                  <Title level={5}>Drag and drop your photos here </Title>
              }
              <Button>
                <UploadOutlined/> Upload Photos
              </Button>
            </div>
          </div>

        </div>
      </Col>

    </>
  )
}

Gallery.defaultProps = {
  parking: [
    {
      label: 'Available', value: 'available',
      type: [
        {label: 'Private', value: 'private',},
        {label: 'Public', value: 'public',}
      ],
      siteOption: [
        {label: 'On-Site', value: 'onsite',},
        {label: 'Off-site', value: 'offsite',}
      ],
    },
    {label: 'Not-available', value: 'not-available', type: []}
  ],
  reservation: [
    {label: 'Yes-reservation-needed', value: 'yes',},
    {label: 'No-reservation-needed', value: 'no',}
  ],
}
export default Gallery;
