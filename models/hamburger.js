/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var hamburger = {
	all: function(cb) {
		orm.all('hamburgers', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	create: function(cols, vals, cb) {
		orm.create('hamburgers', cols, vals, function(res){
			cb(res);
		});
	},
	update: function(objColVals, condition, cb) {
		orm.update('hamburgers', objColVals, condition, function(res){
			cb(res);
		});
	},
	delete: function(condition, cb){
		orm.delete('hamburgers', condition, function(res){
			cb(res);
		});
	}
};

module.exports = hamburger;

// hamburger.delete(condition, function(data){
// 	res.redirect('/hamburgers');
// });
