//getmodule_obj.js

var ModObj = require('./module_obj');

var mod = new ModObj();
mod.setName('Hybrid');
mod.sayHello();

// module 'module_obj' is NOT singleton, it replaced exports to an object function.
var mod2 = new ModObj();
mod2.setName('Texus');
mod.sayHello(); // Hello Texus

var util = require('util');

console.log(util.inspect(mod2,false,2,true));
console.log(util.inspect(mod2,true,2,true));