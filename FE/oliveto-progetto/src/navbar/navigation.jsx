import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import imag1 from '../imagine/logo3-min.jpg';
import imag2 from '../imagine/IMARBN.png';

function Navigation() {
  const [prenotazioneWindow, setPrenotazioneWindow] = useState(null);

  const handlePrenotaClick = () => {
    const nuovaFinestra = window.open(
      '/prenotazione',
      '_blank'
    );

    setPrenotazioneWindow(nuovaFinestra);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        {/* Modificato il link del logo per utilizzare il componente Link */}
        <Navbar.Brand as={Link} to="/">
          <img src={imag1} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Foto</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Ausstattung</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Kontakt</NavDropdown.Item>
            </NavDropdown>
            {/* Cambiato il link da Airbnb a '/prenotazione' */}
            <Nav.Link as={Link} to="/prenotazione">
              <img
                src={imag2}
                alt="Logo ARBNB"
                style={{ width: '40px', height: 'auto' }}
              />
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="me-2">
              Search
            </Button>
            <Button variant="success" as={Link} to="/prenotazione">
              Prenota
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
