import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const CardsDetails = () => {
  return <div>
    <h3>Cards Details Page</h3>
    <section className='d-flex justify-content-center align-items-center py-2 '>
      <Container>
       <Row>
        <Col sm={6}>
        <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" style={{height:'260px'}} alt="" />
        </Col>
        <Col sm={6}>
      <div className="">
        <strong>Restourant:</strong> <span>Masala theory</span>
      </div>
        </Col>
       </Row>
      </Container>
    </section>
  </div>
}

export default CardsDetails
