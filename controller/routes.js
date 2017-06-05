const Article = require("../models/Article.js");


module.exports = function(app){
	
	
	// Route used to query MongoDB for all saved articles.

	app.get("/api/saved", function(req, res) {

	  // We will find all the records, sort it in descending order, then limit the records to 5
	  // Article.find({}).sort([
	  //   ["date", "descending"]
	  // ]).limit(5).exec(function(err, doc) {
	  //   if (err) {
	  //     console.log(err);
	  //   }
	  //   else {
	  //     res.send(doc);
	  //   }
	  // });
	});

	// This is the route we will send POST requests to save each article.
	app.post("/api/saved", function(req, res) {
	  
	  // console.log("BODY: " + req.body.location);

	  // // Here we'll save the location based on the JSON input.
	  // // We'll use Date.now() to always get the current date time
	  // Article.create({
	  //   location: req.body.location,
	  //   date: Date.now()
	  // }, function(err) {
	  //   if (err) {
	  //     console.log(err);
	  //   }
	  //   else {
	  //     res.send("Saved Search");
	  //   }
	  // });
	});

	//Route used to delete a saved article in the database
	app.delete("/api/saved", function(req, res) {
	  
	  
	});

	// Main Route. This will redirect the user to our rendered React application
	app.get("*", function(req, res) {
		res.send(__dirname + "/public/index.html");	
	  //res.sendFile(__dirname + "/public/index.html");
	});


};// END module.exports

