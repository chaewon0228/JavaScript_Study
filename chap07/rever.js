"use strict"
let str = "1110101";
let result="";
//1의 보수
function reverse(str){
   for(let item of str){
       if(item == "1") {
            item = "0"
            result = item;
       }
       else {
           item = "0";
           result = item;
       }
   }
   return result;
}
console.log(reverse(str));