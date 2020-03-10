import React from "react";
import { Link } from "react-router-dom";
import { UserConsumer } from "../context";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { motion } from "framer-motion";
import {DivWrapper} from "../styles";

const Login = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <UserConsumer>
        {({ data, inputChange, handleLogin }) => (
          <Container>
          <DivWrapper>
            <h2>Login</h2>
            <Form>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="example@email.com"
                  value={data.email}
                  onChange={inputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  value={data.password}
                  onChange={inputChange}
                />
              </FormGroup>
              <Button onClick={handleLogin}>Login</Button>
              <p className="signupLink">
                <Link to="/signup">Don't have an account? Sign up here</Link>
              </p>
            </Form>
            <img src={process.env.PUBLIC_URL + '/bottom.png'} alt="travel"/>
          </DivWrapper>
          </Container>
        )}
      </UserConsumer>
    </motion.div>
  );
};

export default Login;
