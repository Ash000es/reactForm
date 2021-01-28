import React, {useState} from 'react'
import {Checkbox} from 'formik-antd'
import {Collapse, Typography} from 'antd';
import {Col} from "react-bootstrap";

const {Title, Text} = Typography;
const {Panel} = Collapse;

function Amenities(props) {
  const {form: {values}} = props;
  const [amenities, setAmenities] = useState(props.amenities)
  const genExtra = (amenity) => {
    const count = values && values['amenities'] && values['amenities'][amenity.label] ? Object.values(values['amenities'][amenity.label]).filter(item => item === true).length:'0';
    return <Text style={{width: 50}}>{`${count}/${amenity.options.length} selected`}</Text>
  };
  return (
    <>
      <Col xs lg="12" className='vert-flex' style={{marginTop: 20}}>
        {/* every formik-antd component must have the 'name' prop set: */}
        <Title level={5}>All Amenities by category</Title>
        <Collapse accordion>
          {
            props.amenities.map((amenity, index) => (
              <Panel
                header={amenity.label}
                key={amenity.label}
                extra={genExtra(amenity,index)}
              >
                {amenity.options.map((option, optionIndex) => (
                  <Checkbox
                    key={option.label}
                    name={`amenities.${amenity.label}.${option.label}`}
                    onChange={(e) => {
                      const _amenities = [...amenities];
                      _amenities[index]['options'][optionIndex].value = e.target.value;
                      setAmenities(_amenities)
                    }}>
                    {option.label}
                  </Checkbox>
                ))}
              </Panel>
            ))
          }

        </Collapse>
      </Col>

    </>
  )
}

Amenities.defaultProps = {
  amenities: [
    {
      label: 'Bathroom',
      options: [{
        label: 'Daily Clean',
        key: 'daily'
      }]
    },
    {
      label: 'Food & Drink',
      options: [
        {
          label: 'Dinning area',
          key: 'dining'
        }
      ]
    }
  ],
}
export default Amenities;
