//getmodule.js

var mod = require('./module');
mod.setName('Hybrid');
mod.sayHello();

// module is singleton
var mod2 = require('./module');
mod2.setName('Texus');
mod.sayHello(); // Hello Texus