"use strict"
function sumInput() {
    let numbers = [];
    let sum = 0;
    while (true) {
      let value = prompt("숫자 입력");
      if (value=="" || value==null) break;
      numbers.push(+value);
    }
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );