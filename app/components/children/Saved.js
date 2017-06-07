// Include React
const React = require("react");

// This is the History component. It will be used to show a log of  recent searches.
const Saved = React.createClass({
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body text-center">
        <h1>Saved Articles Go Here</h1>
        {/*
          {/* Here we use a map function to loop through an array in JSX }
          
          {this.props.history.map(function(search, i) {
            return (
              <p key={i}>{search.location} - {search.date}</p>
            );
          })}
        */}  
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
