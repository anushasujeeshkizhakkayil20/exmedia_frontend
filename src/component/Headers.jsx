import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Headers() {
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         <Link to={'/'} style={{textDecoration:'none'}}> <Navbar.Brand href="#home" style={{textDecoration:'none'}}>Home</Navbar.Brand></Link>
          <Nav className="me-auto">
          <Link to={'/about'}  style={{textDecoration:'none'}}> <Nav.Link href="#home"  style={{textDecoration:'none'}}>About</Nav.Link></Link>
          <Link to={'/service'} style={{textDecoration:'none'}}>  <Nav.Link href="#features" style={{textDecoration:'none'}}>Service</Nav.Link></Link>
           <Link to={'/contact'} style={{textDecoration:'none'}}> <Nav.Link href="#pricing"  style={{textDecoration:'none'}}>Contact</Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers