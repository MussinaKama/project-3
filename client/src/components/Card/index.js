import React from "react";
import { Col, Card, CardHeader, CardBody, Button} from "reactstrap";
import { motion } from "framer-motion";


const CityCard = (props) => {
  return (
    <Col style={{ width: '18rem', display: "inline-block", border:"dark", borderRadius:"10px", fontFamily:"Tahoma, Geneva, sans-serif"}}>
    <motion.div
    initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}>
      <Card>
      <CardHeader style={{background: "orange", textAlign: "center", fontWeight: "bold"}}>{props.city}, {props.date}</CardHeader>
        <CardBody style={{textAlign: "center"}}>
          <p>
            {props.country}, {props.continent}
          </p>
          <p>{props.restaurant}</p>
          <p>{props.events}</p>
          <p>{props.activities}</p>
          <img src={props.image} alt={props.city} style={{width: 200, height: 200}}/>
        </CardBody>
      </Card>
    </motion.div>
    </Col>
  );
};

export default CityCard;
