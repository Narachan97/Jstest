const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
    if(line % 3 ==0){
        console.log("짝");
    }
    else{
        console.log(line);
    }

  rl.close();
});
rl.on("close", function () {
  process.exit();
});
