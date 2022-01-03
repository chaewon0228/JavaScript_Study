"use strict"

let menu = {
    hamburger : 5000,
    potato : 1000,
    cola : 1000,
    option : "선택"
};
function printMenu(obj){
   for(let item in obj){
       console.log(item + " : "+obj[item]);
   }
}
function multiply(obj) {
    for (let item in obj) {
      if (typeof obj[item] == 'number') {
        obj[item] *= 2;
      }
    }
}
  printMenu(menu);
  console.log("------------------");
  multiply(menu);
  printMenu(menu);
  