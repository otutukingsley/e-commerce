import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <NavLink to="/">
            <Navbar.Brand>e-commerce</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto d-flex flex-md-row align-items-md-center">
              <NavLink to="/cart" style={{ color: 'white' }}>
                <i className="fas fa-shopping-cart"></i> Cart
              </NavLink>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="user-name">
                  <NavLink to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </NavLink>
                  <NavDropdown.Item onClick={() => dispatch(logout())}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavLink
                  to="/login"
                  style={{ color: 'white', margin: '0 0 0 10px' }}
                >
                  <i className="fas fa-user"></i> Sign In
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
