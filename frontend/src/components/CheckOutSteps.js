import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const CheckOutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <NavLink to="/login">
            <Nav.Link>Sign In</Nav.Link>
          </NavLink>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <NavLink to="/shipping">
            <Nav.Link>Shipping</Nav.Link>
          </NavLink>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <NavLink to="/payment">
            <Nav.Link>Payment</Nav.Link>
          </NavLink>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <NavLink to="/placeorder">
            <Nav.Link>Place Order</Nav.Link>
          </NavLink>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckOutSteps;
