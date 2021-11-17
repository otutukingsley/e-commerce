import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <NavLink to="/">
            <Navbar.Brand>e-commerce</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink to="/cart" style={{ color: 'white'}}>
                <i className="fas fa-shopping-cart"></i> Cart
              </NavLink>
              <NavLink to="/signin" style={{ color: 'white', margin: "0 0 0 10px"}}>
                <i className="fas fa-user"></i> Sign In
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
