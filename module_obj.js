// moduleAsObject.js

// inculde this module will get a object function to avoid singleton!

function Hello() {
	var name;
	
	this.setName = function(newName) {
		name = newName;
	};
	
	this.sayHello = function(newName) {
		console.log('Hello ' + name);
	};
};

module.exports = Hello;