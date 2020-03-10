import React from "react";
import { Col, Card, CardHeader, CardBody, Button} from "reactstrap";
import { motion } from "framer-motion";


const CityCard = (props) => {
  return (
    <motion.div
    initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}>
    <Col style={{ width: '18rem', display: "inline-block", border:"dark", borderRadius:"10px", fontFamily:"Tahoma, Geneva, sans-serif"}}>
      <Card>
      <CardHeader>{props.city}, {props.date}<Button onClick={() => props.removeCard(props.id)}></Button></CardHeader>
        <CardBody>
          <p>
            {props.country}, {props.continent}
          </p>
          <p>{props.restaurant}</p>
          <p>{props.events}</p>
          <p>{props.activities}</p>
          <img src={props.image} alt={props.city} style={{width: 200, height: 200}}/>
        </CardBody>
      </Card>
    </Col>
    </motion.div>
  );
};

export default CityCard;
