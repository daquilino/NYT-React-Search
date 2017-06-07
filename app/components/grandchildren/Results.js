// Include React
var React = require("react");
var Moment = require("moment");

// Creating the Results component
var Results = React.createClass({
  // Here we render the function
  getInitialState: function() {
    return { id: ""};
  },

  onSave: function(id){
    this.setState({id: id})
  },
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">
        
           {this.props.articles.map(function(search, i) {
              return (
                <div className="well" key={i}>
                  <h2>{search.headline.main}</h2>
                  <h4>published: { Moment(search.pub_date).format('ddd MMMM Do YYYY').toString()}</h4>
                  <button className="btn btn-primary">SAVE</button>
                  <a href={search.web_url} target="_blank"><button className="btn btn-info">READ</button></a>
                </div>  
              );
            })}
       
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
