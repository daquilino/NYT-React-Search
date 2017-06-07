// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
const Main = require("../components/Main");
const Search = require("../components/children/Search")
const Saved = require("../components/children/Saved");


//Export the Routes
module.exports = (

  // The high level component is the Router component
  
    <Route path="/" component={Main}>

    <Route path="Saved" component={Saved} />
    <Route path="Search" component={Search} /> 
     
    <IndexRoute component={Search} />

    </Route>
  

);

