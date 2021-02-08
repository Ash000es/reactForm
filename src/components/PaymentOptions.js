import React, { useState } from 'react'
import { Checkbox, Radio } from 'formik-antd'
import { Typography } from 'antd'
import { Col, Row } from 'react-bootstrap'
import PaymentIcon from './payment/PaymentIcon'

const { Title, Text } = Typography

function PaymentOptions(props) {
  const {
    form: { errors, touched },
    form
  } = props
  const [acceptCard, setAcceptCard] = useState(form && form.values ? form.values.acceptCard : true)
  return (
    <Col lg='8' className='vert-flex'>
      <Title level={5} style={{ marginTop: 50 }}>
        Guest payment options
      </Title>
      <Text className='field-label'>Can you charge credit cards at the property?</Text>
      <Radio.Group name={'acceptCard'} onChange={({ target }) => setAcceptCard(target.value)}>
        <Radio value={true}>Yes</Radio>
        <Radio value={false}>No</Radio>
      </Radio.Group>

      {acceptCard && (
        <Row lg='12'>
          {props.options.map((option) => (
            <Col lg='6' className={'card-view'} key={option.id}>
              <Checkbox>
                <PaymentIcon id={option.id} className='card-icon' />
                <Text className='card-name'>{option.label}</Text>
              </Checkbox>
            </Col>
          ))}
        </Row>
      )}
    </Col>
  )
}

PaymentOptions.defaultProps = {
  options: [
    { id: 'visa', label: 'Visa' },
    { id: 'mastercard', label: 'MasterCard' },
    { id: 'amex', label: 'American Express' },
    { id: 'discover', label: 'Discover' }
  ]
}
export default PaymentOptions
