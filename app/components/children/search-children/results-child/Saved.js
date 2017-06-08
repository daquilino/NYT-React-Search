// Include React
const React = require("react");
const Moment = require("moment");
const Helper = require("../../../utils/helpers");

// This is the Saved component. It will be used to show saved articles.
const Saved = React.createClass({

  getInitialState: function() {
    return { saved: []};
  },
  
  // When component is first mounted this runs to query db for all saved articles
  componentDidMount: function(prevProps, prevState) {
      this.querySaved();
  },

  // Used to query db for all saved articles, then saves them to this.state
  querySaved: function(){
  
    Helper.getSaved()
      .then(function(saved){

        this.setState({"saved" : saved.data});    

      }.bind(this));  
  },
  // Runs every time props are updated.
  // Used to update (query db for saved articles) 'Saved Articles' before render.
  // Triggered from parent component 'Results' using dummy prop 
  componentWillReceiveProps(nextProps) {

    this.querySaved();
  },

  handleClick: function(article){
    
    Helper.deleteSaved(article._id)
    .then(function(result){
      Helper.getSaved()
      .then(function(saved){                  
        this.querySaved();  
      }.bind(this));  
    }.bind(this));
    
  },
  // Here we describe this component's render method
  render: function() {

    var savedData;
    if(this.state.saved.length > 0)
    {
      savedData = this.state.saved.map(function(article, i) {
        
        return (
          <div className="well" key={i}>
            <h4>{article.title}</h4>
            
            <h6>Saved Date: { Moment(article.dateSaved).format('ddd MMMM Do YYYY').toString()}</h6>
            
            {/* In order for onClick to work we must bind article 'this' to map callback function below.
                Also we bind each 'search's' this to the handleClick and use that 'search' as a parameter*/}
            <button className="btn btn-warning" onClick={this.handleClick.bind(this, article)}>
              <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
            </button>
            
            <a href={article.url} target="_blank"><button className="btn btn-info">READ</button></a>
          </div>  
        );
      }.bind(this))
    }
    else
    {
      savedData = <h3>No Saved Articles</h3>
    }  
    
    return (
      
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-center">Saved Articles</h3>
          </div>
          <div className="panel-body text-center">
            {savedData}
          </div>
        </div>
      
    );
  }  
});

// Export the component back for use in other files
module.exports = Saved;
