import React from "react";
import { NavLink } from "reactstrap";
import { NavWrapper } from "../../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const TopNavbar = () => {
  return (
    <NavWrapper className="flex-column">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <NavLink
          className="links"
          href="/"
          style={{ fontSize: "30px", fontFamily: "Baloo Tammudu" }}
        >
          <FontAwesomeIcon icon={faHome} />
          About
        </NavLink>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <NavLink
          className="links"
          href="/profile"
          style={{ fontSize: "30px", fontFamily: "Baloo Tammudu" }}
        >
          <FontAwesomeIcon icon={faUserCircle} />
          Profile
        </NavLink>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <NavLink
          className="links"
          href="/login"
          style={{ fontSize: "30px", fontFamily: "Baloo Tammudu" }}
        >
          <FontAwesomeIcon icon={faSignInAlt} />
          Login
        </NavLink>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <NavLink
          className="links"
          href="/signup"
          style={{ fontSize: "30px", fontFamily: "Baloo Tammudu" }}
        >
          <FontAwesomeIcon icon={faGlobeAmericas} />
          Signup
        </NavLink>
      </motion.div>
    </NavWrapper>
  );
};

export default TopNavbar;
