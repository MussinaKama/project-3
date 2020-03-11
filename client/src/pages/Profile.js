import React from "react";
import { UserConsumer } from '../context';
import { Button } from "reactstrap";
import { Link} from "react-router-dom"
import CityForm from "../components/Form/index";
import { motion } from "framer-motion";
import {ProfileWrapper} from "../styles";
import {Container} from "reactstrap";


const Profile = () => {
    return (
        <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <UserConsumer>
        {({ data, logout }) => (
        <Container style={{marginTop: 20, marginLeft: 50}}>
        <ProfileWrapper>
            {(data.loggedIn)? (
                <div>
                    <Button className="logout" onClick={logout}>Logout</Button>
                    <CityForm/>
                </div>
            ): (
                <div>
                    <h1> Log in to view this page </h1>
                    <Link to="/login"><Button> Login </Button></Link>
                    
                </div>
            )}
        </ProfileWrapper>
        </Container>
      )}
      </UserConsumer>
        </motion.div>

    )
    
}

export default Profile;