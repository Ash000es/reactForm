import React, {useState} from 'react'
import {Checkbox, Select} from 'formik-antd'
import {Collapse, Typography} from 'antd';

import {Col} from "react-bootstrap";

const {Title, Text} = Typography;
const {Option} = Select;
const Style = {}
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function Amenities(props) {
  const {form: {errors, touched}} = props;
  return (
    <>
      <Col xs lg="12" className='vert-flex' style={{marginTop: 20}}>
        {/* every formik-antd component must have the 'name' prop set: */}
        <Title level={5}>All Amenities by category</Title>
        <Collapse accordion>
          {
            props.amenities.map((amenity)=>(
              <Panel header={amenity.label} key={amenity.label}>
                {amenity.options.map((option)=>(<Checkbox name={amenity.label}>{option.label}</Checkbox>))}
              </Panel>
            ))
          }

        </Collapse>,
      </Col>

    </>
  )
}

Amenities.defaultProps = {
  amenities: [
    {
      label: 'Bathroom',
      options:[]
    },
    {
      label: 'Food & Drink',
      options:[
        {
          label:'Dinning area',
          key:'dining'
        }
      ]
    }
  ],
}
export default Amenities;
