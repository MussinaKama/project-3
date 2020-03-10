import React from "react";
import { UserConsumer } from '../context';
import Signup from "../components/Signup/index"
import { motion } from "framer-motion";

const SignupPage = () => {
  return (
    <motion.div 
    exit={{ opacity: 0 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}>
    <UserConsumer>
      {({ data, inputChange, handleSignup }) => (
           <Signup
           email={data.email}
           password={data.password}
           username={data.username}
           handleInputChange={inputChange}
           handleSignup={handleSignup}
           />
      )}  
    </UserConsumer>
    </motion.div>
  );
}


export default SignupPage;