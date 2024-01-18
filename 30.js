// # 문제30 : 문자열 속 문자 찾기

// 문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.

// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// **그 문자가 시작하는 index를 반환하는 프로그램**을 만들어 주세요
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let first = [];
let second = [];
let firsttext ="";
let secondtext="";
rl.on("line", (line) => {
  const text = line.split(" ");
  if(text.length<=2){
  if (first.length === 0) {
 first = text;
 firsttext=first.toString();
 
  } else {
 second = text;
secondtext=second.toString();
  }
}else{
    console.log("초과했습니다 다시입력해주세요");
    return 0;
}
});

rl.on("close", () => {
  
console.log(firsttext.indexOf(secondtext));
  process.exit();
});