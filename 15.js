const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
rl.on("line", function(line) {
	console.log(`안녕하세요. 저는 ${line}입니다`);
 
	rl.close()
})
rl.on("close", function() {
	process.exit()
})

