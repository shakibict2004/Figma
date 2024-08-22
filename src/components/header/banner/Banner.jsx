import React from 'react'
import "./banner.css"
import { Container, Row, Col, Button} from 'react-bootstrap'
import ban from "../../../assets/banner.png"
const Banner = () => {
  return (
   <section id='banner'>
    <Container>
      <Row>
        <Col lg={6}>
        <div className="ban_text">
          <h4>Startup Business</h4>
          <h2>Empowering startups to fuel
          their business growth</h2>
          <p>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,
 velit
nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
<div className="ban_btn">
        <Button variant="primary" size="lg">
        Get started now 
        </Button>{' '}
      </div>
        </div>
        </Col>
        <Col lg={2}>
        </Col>
         <Col lg={4}>
         <div className="ban_img">
          <img src={ban} alt="" />
         </div>
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default Banner