import React from "react";
import { Link } from "react-router-dom";
import { UserConsumer } from "../context";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { motion } from "framer-motion";
import {DivWrapper, LoginWrapper} from "../styles";

const Login = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <UserConsumer>
        {({ data, inputChange, handleLogin }) => (
          <div>
          <Container>
            <LoginWrapper>
              <div className="wrap-login">
            <Form>
            <Label className="login-form-title">Login</Label>
              <div className="wrap-input">
                <Input className="input"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  value={data.email}
                  onChange={inputChange}
                />
              </div>
              <div className="wrap-input">
                <Input className="input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  value={data.password}
                  onChange={inputChange}
                />
              </div>
              <div className="container-login-form-btn">
              <div className="wrap-login-form-btn">
              <div className="login-form-bgbtn"></div>
              <Button className="login-form-btn" onClick={handleLogin}>Login</Button>
              </div>
              </div>
              <div className="text">
              <p className="signupLink">
                <Link to="/signup">Don't have an account? Sign up here</Link>
              </p>
              </div>
            </Form>
              </div>
            </LoginWrapper>
          </Container>
          <img src={process.env.PUBLIC_URL + '/cropped.png'} alt="travel" style={{marginLeft: 0.1, width: "50%" }}/>
          </div>        
        )}
      </UserConsumer>
    </motion.div>
  );
};

export default Login;
