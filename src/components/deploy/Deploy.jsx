import React from 'react'
import "./deploy.css"
import { Col, Container, Row } from 'react-bootstrap'
import last from "../../assets/last.png"
const Deploy = () => {
  return (
    <section id='deploy'>
        <Container>
            <Row>
                <Col lg={4}>
                <div className="ddd">
                <Row>
                    <Col lg={3}>
                    <img src={last} alt="" />
                    </Col>
                    <Col lg={9}>
                    <h2>Immediate Deployment</h2>
                    <h4> Et vero eos et accusamus et 
                    iusto odio dignissimos</h4>

                    </Col>
                </Row>
                </div>
                </Col>
                <Col lg={4}>
                <div className="ddd">
                <Row>
                    <Col lg={3}>
                    <img src={last} alt="" />
                    </Col>
                    <Col lg={9}>
                    <h2>Immediate Deployment</h2>
                    <h4> Et vero eos et accusamus et 
                    iusto odio dignissimos</h4>

                    </Col>
                </Row>
                </div>
                </Col>
                <Col lg={4}>
                <div className="ddd">
                <Row>
                    <Col lg={3}>
                    <img src={last} alt="" />
                    </Col>
                    <Col lg={9}>
                    <h2>Immediate Deployment</h2>
                    <h4> Et vero eos et accusamus et 
                    iusto odio dignissimos</h4>

                    </Col>
                </Row>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Deploy