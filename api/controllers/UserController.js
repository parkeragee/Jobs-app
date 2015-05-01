module.exports = {

	'new': function(req, res) {
		res.view();
	},

	create: function(req, res) {
		var email = req.param('email');
		var password = req.param('password');

	}

};

