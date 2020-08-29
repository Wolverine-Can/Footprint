var express  = require("express");
var router   = express.Router();
var passport = require("passport");
var User     = require("../models/user");

var showBackground = {
    showBackground
}

router.get("/", function(req, res) {
	res.render("landing");
});

router.get("/register", function(req, res){
	showBackground.showBackground = true;
    res.render("register", {page: 'register', showBackground : showBackground}); 
});

router.post("/register", function(req, res){
	var newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, function(err, user) {
		if(err) {
			req.flash("error", err.message);
			return res.redirect("register");
		}
		passport.authenticate("local")(req, res, function() {
			req.flash("success", "Welcome to Footprint! " + user.username);
			res.redirect("/gallery");
		});
	});
});

router.get("/login", function(req, res){
	showBackground.showBackground = true;
    res.render("login", {page: 'login', showBackground : showBackground}); 
});

router.post("/login", passport.authenticate("local", {successRedirect: "/gallery", failureRedirect: "/login"}), function(req, res){
	
});

router.get("/logout", function(req, res) {
	req.logout();
	req.flash("success", "Logged you out!")
	res.redirect("/gallery");
});

module.exports = router;