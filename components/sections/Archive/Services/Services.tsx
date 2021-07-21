import React from 'react'
import { IServices } from '@/types/homepage'
import { Row, Container } from 'styled-bootstrap-grid'
import ServiceItem from './ServiceItem'

const Services: React.FC<IServices> = ({ data }) => {
  return (
    <Container>
      <Row justifyContent="center">
        {data.map((item, index) => {
          return <ServiceItem key={`services_${index}`} {...item} />
        })}
      </Row>
    </Container>
  )
}

export default Services
