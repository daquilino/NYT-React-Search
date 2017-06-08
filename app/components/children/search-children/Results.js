// Include React
const React = require("react");
const Moment = require("moment");
const Helper = require("../../utils/helpers");

const Saved = require("./results-child/Saved");

// Creating the Results component
var Results = React.createClass({
  // Here we render the function
  getInitialState: function() {
    return { article: ""};
  },

  componentDidUpdate: function(prevProps, prevState) {
  
    // this prevents setState to keep triggering componentDidUpdate 
    if((this.state.article !== "" )&&(this.state.article !== prevState.article)){   

      Helper.postSaved(this.state.article)
        .then(function(result){            
        
          this.setState({"article" : ""});    
          console.log("article saved");

          //go to router-route / saved ?

        }.bind(this));
    } 
  },

  handleClick: function(article){
    this.setState({article: article})
  },

  
  render: function() {
  console.log("results Rendered");    
    var resultsData;

    if(this.props.articles.length > 0)
    {
      resultsData = this.props.articles.map(function(search, i) {
        while(i < 5)
        {  
          return (
            <div className="well" key={i}>
              <h3>{search.headline.main}</h3>
              
              <h4>published: { Moment(search.pub_date).format('ddd MMMM Do YYYY').toString()}</h4>
              
              {/* In order for onClick to work we must bind search's 'this' to map callback function below.
                  Also we bind each 'search's' this to the handleClick and use that 'search' as a parameter*/}
              <button className="btn btn-primary" onClick={this.handleClick.bind(this, search)}>SAVE</button>
              
              <a href={search.web_url} target="_blank"><button className="btn btn-info">READ</button></a>
            </div>  
          );
        }  
      }.bind(this))

    } 
    else
    {
      resultsData =  <h3>No Results</h3>

    } 

      return (
        <div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Results</h3>
            </div>
            <div className="panel-body text-center">
           
              {resultsData}
           
            </div>
          </div>

          <div className="row">
            <Saved />
          </div>
        </div>    
      ); 
  }
});

// Export the component back for use in other files
module.exports = Results;
