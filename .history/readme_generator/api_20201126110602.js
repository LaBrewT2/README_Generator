const axios = require("axios");
console.log(_.range(5));
const api = {
  async getUser(userResponses) {
    try { let response = await axios
        
      // Sample URL: https://api.github.com/users/LaBrewT2
        .get(`https://api.github.com/users/${userResponses.username}`);
        return response.data;

      } catch (error) {
        console.log(error);
      }
  }
};

module.exports = api;