// the game object
gameObject.Game = function(game) {

};

// game prototype
gameObject.Game.prototype = {
	// preload function
	preload: function() {

	},
	// create function
	create: function() {

	},
	// update function
	update: function() {


	},
	// start the next state
	listener: function() {
		console.log('status');
		this.state.start('Menu');
	}

}
