
// # 문제36 : 구구단 출력하기

// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  console.log(GuguDan(line));

  rl.close();
});
rl.on("close", function () {
  process.exit();
});


function GuguDan(number){
    let result = ' ';
    for(let i = 1 ; i<=9; i++){
        result += number*i + ' ';
    }
    return result;
}