import React from 'react'
import {Select} from 'formik-antd'
import {Button, Typography} from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';
import languages from "../data/languages";
import {FieldArray} from "formik";
import {Col} from "react-bootstrap";

const {Title, Text} = Typography;
const {Option} = Select;

function Languages(props) {
  const {form: {values}} = props;
  console.log(values)
  const Language = ({language,index})=>(
    <Select
      style={{marginTop:20}}
      showSearch
      filterOption={(input, option) =>
        option.name.toLowerCase().startsWith(input.toLowerCase())
      }
      name={`languages[${index}].code`}>
      {languages.map((option) => (
        <Option key={option.code} name={option.name} value={option.code} option={option}>{option.name}</Option>
      ))}
    </Select>
  )
  return (
    <Col xs lg="5" className='vert-flex' style={{marginTop: 40}}>
      {/* every formik-antd component must have the 'name' prop set: */}
      <Title level={5}>Languages Spoken</Title>
      <Text className='note'>What languages do you are your staff speaks?</Text>
      <FieldArray
        name={`languages`}
        render={arrayHelpers => (
          <>
            {values && values.languages && values.languages.length > 0 ? (
                values.languages.map((language, index) => (<Language name={`languages[${index}]`} language={language} index={index}/>))) :
              <Language language={{}} index={0}/>
            }
            <Button style={{alignSelf:'flex-start'}} name={'addLanguage'} type="text" icon={<PlusCircleOutlined/>} onClick={() => arrayHelpers.push({})}>
              add another language
            </Button>
          </>
        )}
      />
    </Col>
  )
}

Languages.defaultProps = {
}
export default Languages;
