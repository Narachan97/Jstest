const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
const test = line.split('');
const reversText= test.reverse();
console.log(reversText.join(""));

  rl.close();
});
rl.on("close", function () {
  process.exit();
});
