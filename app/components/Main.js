// Include React
var React = require("react");

// Here we include all of the sub-components
var Search = require("./children/Search");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({
  render: function() {
    return (
    <div>
      
      <div className="container">
        <br/> 
          <div className="row">     
            <div className="well text-center" id="title-div">
              <h1 id="title-header">NYT Article Search</h1>
            </div>
          </div>
        <br/>       
        <Search /> 
        <footer className="footer">
        <div className="row text-center">
            <p id="footer" >&copy;Douglas Aquilino | <a href="https://github.com/daquilino/NYT-React-Search">GitHub Repo</a></p>
        </div>
        </footer>
      </div>
      
    </div>  
    );
  } 
});


// Export the component back for use in other files
module.exports = Main;

