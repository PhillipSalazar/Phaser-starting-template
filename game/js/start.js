var gameObject = {};

gameObject.Menu = function(game) {

};

gameObject.Menu.prototype = {
	// preload function
	preload: function() {

	},
	// create function
	create: function() {

	},
	// update function
	update: function() {

	},
	// starts the next state
	listener: function() {
		console.log('status');
		this.state.start('Menu');
	}
	// end of the object If to put more stuff remove this comment
}
