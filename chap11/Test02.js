"use strict"
function makeCounter() {
    let cnt = 0;
  
    return function() {
      return cnt++;
    };
  }
  
  let counter1 = makeCounter();
  let counter2 = makeCounter();
  // 각각 레시컬 환경이 다름*중요 이거 꽈서 냄
  console.log( counter1() ); // 0
  console.log( counter1() ); // 1
  
  console.log( counter2() ); // 0
  console.log( counter2() ); // 1
  