// # 문제40 : 놀이동산에 가자

// 테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다. 

// **원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.**

// 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let maxWeight = 0;
let second = 0;
let count =0;

rl.on("line", (line) => {
    if(count ==0){
    maxWeight =line;
    count++;
    }else{
        second = line;
        count++;
        rl.close(); 
    }

 
});

rl.on("close", () => {
   let toPlayRollerCoaster = 0;
   let sumWeight = 0;
   for (let i = 0; i < second; i++) {
     const randomWeight = Math.floor(Math.random() * 91 + 10);
     console.log(randomWeight);
     sumWeight += randomWeight;
     if (maxWeight >= sumWeight) {
       toPlayRollerCoaster++;
     }
   }

   console.log(toPlayRollerCoaster);
  process.exit();
});

