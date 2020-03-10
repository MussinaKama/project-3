import React, { Component } from "react";
import { FormGroup, Label, Input, Button, Form, Container } from "reactstrap";
import { Link } from "react-router-dom";

class Signup extends Component {
  render() {
    return (
      <div>
        <Container>
        <h2>Signup</h2>
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              value={this.props.email}
              onChange={this.props.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={this.props.password}
              onChange={this.props.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              value={this.props.username}
              onChange={this.props.handleInputChange}
            />
          </FormGroup>
          <Button onClick={this.props.handleSignup}>Signup</Button>
          <p>
            <Link to="/login">Already have an account? Log in here</Link>
          </p>
        </Form>
        </Container>
        <img src={process.env.PUBLIC_URL + '/bottom.png'} alt="travel"/>
      </div>
    )
  }
}



export default Signup;
