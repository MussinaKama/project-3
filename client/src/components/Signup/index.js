import React, { Component } from "react";
import { Label, Input, Button, Form, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { LoginWrapper } from "../../styles";

class Signup extends Component {
  render() {
    return (
      <div>
        <Container>
          <LoginWrapper>
            <div className="wrap-login">
              <Form className="login-form">
              <Label className="login-form-title">Signup</Label>
                <div className="wrap-input">
                  <Input className="input"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={this.props.email}
                    onChange={this.props.handleInputChange}
                  />
                </div>
                <div className="wrap-input">
                  <Input className="input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={this.props.password}
                  onChange={this.props.handleInputChange}                 
                  />
                </div>
                <div className="wrap-input">
                  <Input className="input"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  value={this.props.username}
                  onChange={this.props.handleInputChange}
                  />
                </div>
                <div className="container-login-form-btn">
                <div className="wrap-login-form-btn">
                  <div className="login-form-bgbtn"></div>
                <Button className="login-form-btn" onClick={this.props.handleSignup}>Signup</Button>
                </div>
                </div>
                <div className="text">
                <p>
                  <Link to="/login">Already have an account? Log in here</Link>
                </p>
                </div>
              </Form>
            </div>
          </LoginWrapper>
        </Container> 
       <img src={process.env.PUBLIC_URL + "/cropped.png"} alt="travel" style={{marginLeft: 0.1, width: "50%" }} />
      </div>
    );
  }
}

export default Signup;
