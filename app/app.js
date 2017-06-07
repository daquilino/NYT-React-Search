// Include the Main React Dependencies
const React = require("react");
const ReactDOM = require("react-dom");
const Main = require("./components/Main")


// This code here allows us to render our main component (in this case Main)
ReactDOM.render(<Main />, document.getElementById("app"));

// Code below if using React Router
//var Router = require('react-router').Router;
//import { BrowserRouter, Route } from 'react-router-dom';
// Include React-Router Routes
//const Routes = require("./config/react-routes");

// Use for react-router
//ReactDOM.render(<BrowserRouter>{Routes}</BrowserRouter>, document.getElementById("app"));