import React from "react";
import { Col, Card, CardHeader, CardBody} from "reactstrap";


const CityCard = (props) => {
  return (
    <Col>
      <Card>
      <CardHeader>{props.city},   {props.date}</CardHeader>
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
  );
};

export default CityCard;
