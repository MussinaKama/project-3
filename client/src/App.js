import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import About from "./pages/About";
import SignupPage from "./pages/SignupPage";
import NotFound from "./pages/NotFound";
import TopNavbar from "./components/Navbar/index";
import UserProvider from "./context";
import { AnimatePresence } from "framer-motion";
import {Row, Col} from "reactstrap";
import {ContainerWrapper} from "./styles";


function App() {
  return (
    <UserProvider>
      <Router>
        <ContainerWrapper fluid>
          <Row>
            <Col md={2} style={{background: "orange", height:"154px"}}>
        <TopNavbar/>   
            </Col>
            <Col md={10}>
          <AnimatePresence>
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignupPage} />
              <Route exact path="/profile" component={Profile} />
              <Route component={NotFound} />
            </Switch>
          </AnimatePresence>
            </Col>
          </Row>
        </ContainerWrapper>
      </Router>
    </UserProvider>
  );
}

export default App;
