import React from "react";
import { Col, FormControl, Form, Button, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Topbar() {
  return (
    <Navbar variant="light" expand="lg">
      <Navbar.Brand href="#home">
        <Col xs={6} md={4}>
          Taxi Fare App
        </Col>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#history">History</Nav.Link>
          <NavDropdown title="Convertor" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Mille to kilometre</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Euro to dollar</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Other</NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" />
          <Button className="Search btn-sm">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Topbar;