const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
    let number = line.split(' ');
    if(number.length <=2){
    console.log(Math.pow(parseInt(number[0],10), parseInt(number[1],10)));
    }
    else{
        return 0;
    }
  rl.close();
});
rl.on("close", function () {
  process.exit();
});
