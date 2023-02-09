import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Navigation = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  return (
    <>
      <Nav>
        <NavItem>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </NavItem>
        {logged_in && (
          <>
          <NavItem>
            <a href={sign_out_route} className="nav-link">
              Sign Out
            </a>
          </NavItem>
          <NavItem>
          <NavLink to="/apartmentnew" className="nav-link">
            Add New Apartment
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/userapartmentindex" className="nav-link">
            My Apartments
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/apartmentindex" className="nav-link">
            Apartment Listings
          </NavLink>
        </NavItem>
        </>
        )}
        {!logged_in && (
          <NavItem>
            <a href={sign_in_route} className="nav-link">
              Sign In
            </a>
          </NavItem>
        )}
        {!logged_in && (
          <NavItem>
            <a href={new_user_route} className="nav-link">
              Sign Up
            </a>
          </NavItem>
        )}
        {!logged_in && (
           <NavItem>
           <NavLink to="/apartmentindex" className="nav-link">
             Apartment Listings
           </NavLink>
         </NavItem>
        )}
      </Nav>
    </>
  )
}

export default Navigation
