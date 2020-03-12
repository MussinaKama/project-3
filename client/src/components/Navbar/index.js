import React from "react";
import { NavLink} from "reactstrap";
import {NavWrapper} from "../../styles";

const TopNavbar = () => {
  return (
        <NavWrapper className="flex-column">
          <NavLink className="links" href="/">About</NavLink>
          <NavLink className="links" href="/profile">Profile</NavLink>
          <NavLink className="links" href="/login">Login</NavLink>
          <NavLink className="links" href="/signup">Signup</NavLink>
        </NavWrapper> 
  );
};

export default TopNavbar;
