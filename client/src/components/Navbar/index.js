import React from "react";
import {NavLink, Nav, Col} from "reactstrap";

const TopNavbar = () => {
    return (
      <div>
        <Nav vertical>
          <Col col-6>
                <NavLink href="/">About</NavLink>
                <NavLink href="/profile">Profile</NavLink>
                <NavLink href="/login">Login</NavLink>
                <NavLink href="/signup">Signup</NavLink>
          </Col>
        </Nav>
      </div>
    
    )
}

export default TopNavbar;
