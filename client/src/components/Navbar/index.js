import React from "react";
import { NavLink, Nav, Container, Row } from "reactstrap";
import {NavWrapper} from "../../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";



const TopNavbar = () => {
  return (
        <NavWrapper className="flex-column">

          <NavLink className="links" href="/" style={{fontSize:"35px", fontFamily:'Baloo Tammudu',}}> <FontAwesomeIcon icon={faHome} />About</NavLink>
          <NavLink className="links" href="/profile" style={{fontSize:"35px", fontFamily:'Baloo Tammudu',}}><FontAwesomeIcon icon={faUserCircle} />Profile</NavLink>
          <NavLink className="links" href="/login" style={{fontSize:"35px", fontFamily:'Baloo Tammudu',}}><FontAwesomeIcon icon={faSignInAlt} />Login</NavLink> 
          <NavLink className="links" href="/signup"style={{fontSize:"35px", fontFamily:'Baloo Tammudu',}}><FontAwesomeIcon icon={faGlobeAmericas} />Signup</NavLink>
        </NavWrapper>
    
  );
};

export default TopNavbar;
