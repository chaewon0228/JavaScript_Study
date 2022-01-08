"use strict"
let sum =0;
function sumTo(n){
    if(n == 1) return 1;
    return n + sumTo(n-1);
}
let n = 10;
console.log(sumTo(n));