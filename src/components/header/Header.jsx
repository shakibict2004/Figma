import React from 'react'
import { Container, Row, Navbar,Nav,Button, } from 'react-bootstrap'
import "./header.css"
import logo from "../../assets/logo (2).png"
const Header = () => {
  return (
    <div>
        <Navbar expand="lg" className="manu_bg">
      <Container>
        <img src={logo } alt="" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#home">Service</Nav.Link>
            <Nav.Link href="#home">contact</Nav.Link>
        
          </Nav>   
          <div className="btn">
        <Button variant="primary" size="lg"><i class="fa-solid fa-cloud-arrow-down"></i>
          download
        </Button>{' '}
         
      </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

  )
}

export default Header