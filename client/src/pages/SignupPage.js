import React from "react";
import { UserConsumer } from '../context';
import Signup from "../components/Signup/index"

const SignupPage = () => {
  return (
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
  );
}


export default SignupPage;