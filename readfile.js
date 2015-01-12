//readfile.js

var fs = require('fs');

fs.readFile('app.js', 'utf-8', function(err,data) {
	if (err) {
		console.error(err);
	} else {
		console.log(data);
	}
});

console.log('end main flow.');

// the same as:
/*

function readFileCallBack(err,data) {
	if (err) {
		console.error(err);
	} else {
		console.log(data);
	}
}

fs.readFile('app.js','utf-8',readFileCallBack);
console.log('end main flow.');
*/

// sync version

// var data = fs.readFileSync('app.js','utf-8');