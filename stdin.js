// a simple REPL(read-evaluate-put loop)

process.stdin.resume();

process.stdout.write("> ");
process.stdin.on('data',function(data){
	process.stdout.write('= ' + eval(data.toString()) + '\n');
	process.stdout.write('> ');
});