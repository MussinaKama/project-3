import axios from "axios";

export default {
  login: function(loginInfo) {
    return axios.post("/api/users/login", loginInfo);
  },

  signup: function(signupInfo) {
    return axios.post("/api/users/signup", signupInfo);
  },

  isLoggedIn: function() {
    return axios.get("/api/users/profile");
  },

  logout: function() {
    return axios.get("/api/users/logout")
  },

  getCityCards: function() {
    return axios.get("/api/users/savedtrips");
  },

  deleteCityCard: function(id) {
    return axios.put("/api/users/savedtrips/" + id);
  },

  saveCityCard: function(cityData) {
    return axios.post("/api/users/savedtrips", cityData);
  }
};