const axios = require('axios');

export default axios.create({
  baseURL: "http://localhost:9999/",
  headers: {
    "Content-type": "application/json"
  }
});