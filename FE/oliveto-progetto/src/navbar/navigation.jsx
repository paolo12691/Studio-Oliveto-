import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import image1 from '../imagine/Studio Oliveto Logo-06.jpg'

function Navigation() {
  const [prenotazioneWindow, setPrenotazioneWindow] = useState(null);
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const navbarRef = useRef(null);
  const navigate = useNavigate();
 

  const handlePrenotaClick = () => {
    navigate('/prenotazione');
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavbarExpanded(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [navbarRef]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand as={Link} to="/">
  <img
    src={image1}
    alt=""
    style={{
      width: '50px',  
      height: '50px',  
      borderRadius: '50%',  
      objectFit: 'cover',  
    }}
  />
</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={() => setIsNavbarExpanded(!isNavbarExpanded)}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Foto</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Ausstattung</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Kontakt</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
          
        
            <Button variant="success" onClick={handlePrenotaClick}>
            Booking
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

