module.exports = {

	'new': function(req, res) {
		res.view();
	},

	create: function (req, res) {
		// var title = req.param('title');
		// var category = req.param('category');
		// var location = req.param('location');
		// var description = req.param('description');
		// var applyInstructions = req.param('applyInstructions');
		// var company = req.param('company');
		// var url = req.param('url');
		// var highlighted = req.param('highlighted');
		Job.create(req.params.all(), function jobCreated (err, job) {
			if(err) res.badRequest();
			if(job) {
				console.log('Job created!');
				res.redirect('/job');
			}
		});
	}

};