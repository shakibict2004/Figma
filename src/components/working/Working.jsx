import React from 'react'
import "./working.css"
import { Col, Container, Row } from 'react-bootstrap'
import one from "../../assets/1.png"
import two from "../../assets/2.png"
import three from "../../assets/3.png"
import rain from "../../assets/download (1).jpg"
import img from "../../assets/images.jpg"
const Working = () => {
  return (
    <section id='working'>
        <Container>
            <div className="work">
                <h2>Working Process</h2>
                <p>pray for Feni,Cumillah,Noyakhali</p>
            </div>
            <Row>
                <Col lg={6}>
                <div className="all">
                <Row>
                    <Col lg={4}>
                    <img src={one} alt="" />
                    </Col>
                    <Col lg={8}>
                    <h4>pray for Feni</h4>
                    </Col>
                </Row>
                </div>
                <div className="all">
                <Row>
                    <Col lg={4}>
                    <img src={two} alt="" />
                    </Col>
                    <Col lg={8}>
                    <h4>pray for Noyakhali</h4>
                    </Col>
                </Row>
                </div>
                <div className="all">
                <Row>
                    <Col lg={4}>
                    <img src={three} alt="" />
                    </Col>
                    <Col lg={8}>
                    <h4>pray for Cumillah</h4>
                    </Col>
                </Row>
                </div>
                </Col>
                <Col lg={6}>
                <div className="rain">
                <img src={rain} alt="" />
                <img src={img} alt="" />
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Working