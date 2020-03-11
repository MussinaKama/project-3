import React, { useState, useEffect } from "react";
import {
  Container,
  FormGroup,
  Form,
  Label,
  Button,
  Input,
  Col
} from "reactstrap";
import API from "../../utils/API";
import countriesList from "../../data/countries.json";
import continentsList from "../../data/continents.json";
import CityCard from "../Card/index";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormWrapper } from "../../styles";
import moment from "moment";

const CityForm = () => {
  const [data, setData] = useState({
    continentsList,
    countriesList
  });

  const [userInput, setUserInput] = useState({
    id: Math.floor(Math.random() * 100),
    city: "",
    continent: "",
    country: "",
    activities: [],
    restaurant: [],
    events: [],
    image: ""
  });

  const [userDate, setUserDate] = useState({
    startDate: new Date()
  });

  const [savedCard, setSavedCard] = useState([]);

  useEffect(() => {
    console.log(savedCard);
  }, [savedCard]);

  useEffect(() => {
    loadCityCards();
  }, []);

  const handleDateChange = date => {
    setUserDate({ startDate: date});
  };

  const handleSearch = e => {
    const value = e.target.value;
    const filteredCountries = continentsList.filter(c => {
      let newValue = Object.values(c)
      .join("")
      .toLowerCase()
      return newValue.indexOf(value.toLowerCase()) !== -1;
    })

    setData({countriesList: filteredCountries})
  }

  const formatDate = (date) => {
    let fDate = new Date(date)
    let sDate = fDate.getFullYear() + '-'+(fDate.getMonth() + 1) +'-'+fDate.getDate()
    return sDate;

  }
  const loadCityCards = () => {
    API.getCityCards()
      .then(res => setSavedCard(res.data))
      .catch(err => console.log(err));
  };

  const deleteCityCard = id => {
    API.deleteCityCard(id)
      .then(res => loadCityCards())
      .catch(err => console.log(err));
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    API.saveCityCard({
      id: userInput.id,
      city: userInput.city,
      date: userDate.startDate,
      continent: userInput.continent,
      country: userInput.activities,
      activities: userInput.activities,
      restaurant: userInput.restaurant,
      events: userInput.events,
      image: userInput.image
    })
      .then(res => loadCityCards())
      .catch(err => console.log(err)); 
  };

  return (
    <>
      <Col>
        {savedCard.length ? (
          <Container>
            {savedCard.map(user => (
              <CityCard
                key={user.id}
                id={user.id}
                city={user.city}
                date={formatDate(user.date)}
                country={user.country}
                continent={user.continent}
                restaurant={user.restaurant}
                activities={user.activities}
                events={user.events}
                image={user.image}
                removeCard={deleteCityCard}
              />
            ))}
          </Container>
        ) : (
          <h1>No data found in your account</h1>
        )}
      </Col>
      <Container>
        <Col
          className="d-flex justify-content-center"
          style={{ display: "block" }}
        >
          <FormWrapper>
            <Form className="form">
              <FormGroup>
                <Label for="city">What city you want to visit next?</Label>
                <Input
                  type="text"
                  id="city"
                  onChange={handleInputChange}
                  name="city"
                />
              </FormGroup>
              <Datepicker
                selected={userDate.startDate}
                onChange={handleDateChange}
                id="date"
              ></Datepicker>
              <FormGroup>
                <Label for="continent">Choose continent</Label>
                <select onChange={handleInputChange} name="continent" id="continent">
                  {data.continentsList.map(c => (
                    <option key={c.value}>{c.value}</option>
                  ))}
                </select>
              </FormGroup>
              <FormGroup>
                <Label for="country">Choose country</Label>
                <select onChange={handleInputChange}  onSearch={handleSearch} name="country" id="country">
                  {data.countriesList.map(country => (
                    <option key={country.name}>{country.name}</option>
                  ))}
                </select>
              </FormGroup>
              <FormGroup>
                <Label for="restaurant">Restaurants</Label>
                <Input
                  type="text"
                  id="restaurant"
                  onChange={handleInputChange}
                  name="restaurant"
                  placeholder="Insert using comma"
                />
              </FormGroup>
              <FormGroup>
                <Label for="activity">Activities</Label>
                <Input
                  type="text"
                  id="activity"
                  onChange={handleInputChange}
                  name="activities"
                  placeholder="Insert using comma"
                />
              </FormGroup>
              <FormGroup>
                <Label for="event">Events</Label>
                <Input
                  type="text"
                  id="event"
                  onChange={handleInputChange}
                  name="events"
                  placeholder="Insert using comma"
                />
              </FormGroup>
              <FormGroup>
                <Label for="image">Insert URL of image associated with this city/country</Label>
                <Input
                  type="text"
                  id="image"
                  onChange={handleInputChange}
                  name="image"
                />
              </FormGroup>
              <Button onClick={handleFormSubmit}>Submit</Button>
            </Form>
          </FormWrapper>
        </Col>
      </Container>
    </>
  );
};

export default CityForm;
