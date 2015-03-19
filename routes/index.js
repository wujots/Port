var projects = require("../projects.json")

	//Get & render page
	exports.view = function(req, res){
	    res.render("index", projects);
};