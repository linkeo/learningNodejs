//module.js

var name;

exports.setName = function(newName) {
	name = newName;
}

exports.sayHello = function() {
	console.log('Hello ' + name);
}