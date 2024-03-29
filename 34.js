// # 문제34 : sort 구현하기

// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

// 민주를 위해 **키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램**을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)
const readline = require("readline");

let text ="";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  text = line.split(" ");
  toSort(text);
  rl.close();
});
rl.on("close", function () {
  process.exit();
});

function toSort(number){
for(let i =0; i<number.length; i++){
    if(number[i]<=number[i+1])
        {
        console.log("Yes");
    }else if(number[i]>=number[i+1]){
        console.log("No");
    }
    
}
}
