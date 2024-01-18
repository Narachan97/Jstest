// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


let key =[];
let value = [];
const obj ={};//객체

rl.on("line", (line) => {
 const text = line.split(" ");
 if(key.length===0){
    key = text;
 }else {
    value= text;
 }
 

});

rl.on("close", () => {
    for(let i = 0 ; i<key.length; i++){
     obj[key[i]]=parseInt(value[i],10);
    }
    console.log(obj);
  process.exit();
});