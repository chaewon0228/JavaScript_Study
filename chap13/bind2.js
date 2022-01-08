"use strict";

function mul(a, b){ return a*b;}
let double = mul.bind(null, 2);
console.log(double(3));
console.log(double(4));
console.log(double(5));

console.log("-----");

double = mul.bind(null, 3);
console.log(double(3));
console.log(double(4));
console.log(double(5));