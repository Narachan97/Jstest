const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
const space =['수성','금성','지구','화성','목성','토성','천왕성','해왕성'];
rl.on("line", function(line) {
	console.log(space[line-1]);
 
	rl.close()
})
rl.on("close", function() {
	process.exit()
})

