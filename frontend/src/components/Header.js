import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { logout } from "../actions/userActions"
import SearchBox from "./SearchBox"

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand>tutu's store</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <SearchBox/>
            <Nav className="ml-auto d-flex flex-md-row align-items-md-center">
              <Link to="/cart" style={{ color: "white" }}>
                <i className="fas fa-shopping-cart"></i> Cart
              </Link>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="user-name">
                  <Link to="/profile" className="dropdown-item">
                    Profile
                  </Link>
                  <NavDropdown.Item onClick={() => dispatch(logout())}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link
                  to="/login"
                  style={{ color: "white", margin: "0 0 0 10px" }}
                >
                  <i className="fas fa-user"></i> Sign In
                </Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminMenu">
                  <Link to="/admin/userlist" className="dropdown-item">
                    Users
                  </Link>
                  <Link to="/admin/productlist" className="dropdown-item">
                    Products
                  </Link>
                  <Link to="/admin/orderlist" className="dropdown-item">
                    Orders
                  </Link>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;
