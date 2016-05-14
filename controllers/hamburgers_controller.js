/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var cat = require('../models/hamburger.js');

router.get('/', function(req,res) {
	res.redirect('/hamburger')
});

router.get('/hamburgers', function(req,res) {
	hamburger.all(function(data){
		var hbsObject = {hamburgers : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

router.post('/hamburgers/create', function(req,res) {
	cat.create(['name', 'devour it'], [req.body.name, req.body.sleepy], function(data){
		res.redirect('/hamburgers')
	});
});

router.put('/hamburgers/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	hamburger.update({'devour it' : req.body.sleepy}, condition, function(data){
		res.redirect('/hamburgers');
	});
});

router.delete('/hamburgers/delete/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	hamburger.delete(condition, function(data){
		res.redirect('/hamburgers');
	});
});

module.exports = router;
