const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  if(line >=150){
    console.log("yes");
  }else{
    console.log("no");
  }

  rl.close();
});
rl.on("close", function () {
  process.exit();
});
