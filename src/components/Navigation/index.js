import React, { Component } from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Resources from '../Resources';
import LinkTest from '../LinkTest';


export default class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar variant="dark" bg="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/" href="#home">Home</Nav.Link>
                  <Nav.Link as={Link} to="/linktest" href="#linktest">LinkTest</Nav.Link>
                  <Nav.Link as={Link} to="/about" href="#about">About</Nav.Link>
                  <Nav.Link as={Link} to="/resources" href="#resources">Resources</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />              
            
            <Route path="/about" element={<About />} />              
            
            <Route path="/linktest" element={<LinkTest />} />     

            <Route path="/resources" element={<Resources />} />       
          </Routes>
        </div>
      </Router>
    )
  }
};


