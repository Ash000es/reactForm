import React, {useCallback, useEffect, useState} from 'react'
import {Button, Typography} from 'antd';
import {Col, Row} from "react-bootstrap";
import {useDropzone} from 'react-dropzone'
import {DeleteOutlined, EditOutlined, UploadOutlined} from '@ant-design/icons';
import axios from "axios";

const {Title, Text} = Typography;

function Gallery(props) {
  const {form: {errors, touched, values}} = props;
  const [images, setImages] = useState([]);
  useEffect(() => {

  }, [images])
  const onDrop = useCallback(acceptedFiles => {
    var formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    formData.append('upload_preset', 'hgivoqfs');
    axios.post('https://api.cloudinary.com/v1_1/djztl9mhi/image/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => {
      console.log(res)
      const _images = [...images];
      _images.push(res.data.secure_url)
      setImages(_images);
      console.log(images)
    })
  })
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  const Image = ({src}) => (
    <Row className={'image-box'}>
      <img src={src} className={'image'}/>
      <Button type="text" icon={<EditOutlined/>}>
        Edit
      </Button>
      <Button type="text" icon={<DeleteOutlined/>}>
        Delete
      </Button>
    </Row>
  )
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
        <div style={{display: 'flex', padding: 0}}>
          {images && images.length > 0 && (
            images.map((image, index) => (<Image src={image}/>)))
          }
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
