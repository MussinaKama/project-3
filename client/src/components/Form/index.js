import React, { useState, useEffect } from "react";
import { Container, FormGroup, Label, Button, Input, Col } from "reactstrap";
import API from "../../utils/API";
import countriesList from "../../data/countries.json";
import continentsList from "../../data/continents.json";
import CityCard from "../Card/index";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const CityForm = () => {
  const [data, setData] = useState({
    continentsList,
    countriesList
  });

  // const [isSubmitted, setIsSubmitted] = useState(false);
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
  })

  const [savedCard, setSavedCard] = useState([]);

  const handleDateChange = date => {
    setUserDate({startDate: date})
  }
  useEffect(() => {
    loadCityCards();
  }, []);

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
 
  const handleFormSubmit = async event => {
    event.preventDefault();
    // await setIsSubmitted(true);
    // await setUserCard([...userCard, userInput]);
    await API.saveCityCard({
      id: userInput.id,
      city: userInput.city,
      date: userDate.startDate,
      continent: userInput.continent,
      country: userInput.activities,
      activities: userInput.activities,
      restaurant: userInput.restaurant,
      events: userInput.events,
      image: userInput.image
    });
    await loadCityCards();
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
                date={user.date}
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
        <Col>
          <form>
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                type="text"
                id="city"
                onChange={handleInputChange}
                name="city"
              />
            </FormGroup>
            <Datepicker selected={userDate.startDate} onChange={handleDateChange}></Datepicker>
            <FormGroup>
              <Label for="continent">Continent</Label>
              <select onChange={handleInputChange} name="continent">
                {data.continentsList.map(c => (
                  <option key={c.value}>{c.value}</option>
                ))}
              </select>
            </FormGroup>
            <FormGroup>
              <Label for="country">Country</Label>
              <select onChange={handleInputChange} name="country">
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
              />
            </FormGroup>
            <FormGroup>
              <Label for="activity">Activities</Label>
              <Input
                type="text"
                id="activity"
                onChange={handleInputChange}
                name="activities"
              />
            </FormGroup>
            <FormGroup>
              <Label for="event">Events</Label>
              <Input
                type="text"
                id="event"
                onChange={handleInputChange}
                name="events"
              />
            </FormGroup>
            <FormGroup>
              <Label for="image">Image</Label>
              <Input
                type="text"
                id="image"
                onChange={handleInputChange}
                name="image"
              />
            </FormGroup>
            <Button onClick={handleFormSubmit}>Submit</Button>
          </form>
          {/* {isSubmitted &&
            userCard.map(user => (
              <CityCard
                key={user.id}
                id={user.id}
                city={user.city}
                country={user.country}
                continent={user.continent}
                restaurant={user.restaurant}
                activities={user.activities}
                events={user.events}
                image={user.image}
                removeCard={deleteCityCard}
              />
            ))} */}
        </Col>
      </Container>
    </>
  );
};

export default CityForm;
