const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const 학점 = line.split(' ');
  let total = 0;
  for(let i = 0; i <학점.length; i++){
    total += parseInt(학점[i],10);  //10진수 형태로 데이터 변환
    
  }
  console.log(Math.floor(total/학점.length));

  rl.close();
});
rl.on("close", function () {
  process.exit();
});
