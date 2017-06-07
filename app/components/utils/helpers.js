// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT API


// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(searchTerm, startYear, endYear) {

    const KEY = "48a3eb24334045c18a56943879cb540e";
    const NYT_ENDPOINT = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    
  
    var params = {
          'api-key': KEY,
          'q': searchTerm,
          'begin_date': startYear + "0101",
          'end_date': endYear + "1231"
    };


    return axios.get(NYT_ENDPOINT, {params: params}).then(function(response) {
    
      // If get get a result
      if (response.data.response.docs[0]) {
        return response.data.response.docs;
      }
      
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getSaved: function() {
    return axios.get("/api/saved");
  },

  // This function posts new searches to our database.
  postSaved: function(body) {
    return axios.post("/api/saved", body);
  },

  deleteSaved: function(title){
    return axios.delete("/api/saved", { title: title });
  }
};

// We export the API helper
module.exports = helper;
